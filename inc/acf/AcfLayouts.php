<?php

namespace Danzerpress\acf;

use Danzerpress\DP;

class AcfLayouts {
    protected $parent = 'field_59fa78934bca2';
    protected $file = '';
    protected $dir = '';

    public function __construct() 
    {
        add_filter('acf/load_field/name=flexible_layout', [$this, 'filter_danzerpress_layouts'], 10, 1);
        $this->set_file();
        $this->set_dir();
    }

    public function set_file($file = '')
    {
        $this->file = apply_filters('dp_json_file_location', 'danzerpress-sections.json');
    }

    public function set_dir()
    {
        $this->dir = apply_filters('dp_json_dir_location', dp::get_dir() . '/dp-json/');
    }

    /**
     * Validate fields so acf does not error out
     */
    public function dp_acf_get_valid_fields($unvalid_fields, $key) 
    {
        $fields = [];
        foreach ($unvalid_fields as $unvalid_field) { 
            $valid_field = acf_get_valid_field($unvalid_field);
            $valid_field['parent_layout'] = $key;
            $valid_field['parent'] = $this->parent;
            $fields[] = $valid_field;
        }
        return $fields;
    }

    /**
     * Hooking into ACF layouts on load
     */
    public function filter_danzerpress_layouts( $field ) 
    {
        //If is admin and acf-field-group bail
        if (is_admin() && get_current_screen()->post_type === 'acf-field-group') {
            return $field;
        }
        
        if (is_file($this->file) && !defined('IS_DEV')) {
            return $this->dp_include_json_folder($this->file);
        }

        $prepend_fields = apply_filters('dp_prepend_global_acf_fields', []);
        $unvalid_fields = apply_filters('dp_global_acf_fields', []);

        $layouts = [];

        //loop through layouts
        foreach ($field['layouts'] as $key => $layout) {
            //filter to allow changing only specific layouts
            $sub_fields = $field['layouts'][$key]['sub_fields'];
            $sub_fields = apply_filters("dp_acf_layout_{$layout['name']}", $sub_fields, $key);

            //Looping through added fields, validate them, and add to all layouts
            $sub_fields = array_merge($this->dp_acf_get_valid_fields($prepend_fields, $key), $sub_fields);
            
            //Setting final sub_fields array, filterable by layout name
            $field['layouts'][$key]['sub_fields'] = apply_filters("dp_acf_layout_{$layout['name']}_sub_fields", array_merge($sub_fields, $this->dp_acf_get_valid_fields($unvalid_fields, $key)));
        }

        if (defined('IS_DEV')) {
            $this->dp_acf_write_json_field_group($field);
        }

        return $field;
    }

    public function dp_acf_write_json_field_group($field_group) 
    {
        /**
         * Let's create dir if it doesn't exist
         */
        $this->dp_check_json_dir($this->dir);

        // write file
        $f = fopen("{$this->dir}/{$this->file}", 'w');
        fwrite($f, acf_json_encode( $field_group ));
        fclose($f);
        
        return true;
    }

    public function dp_check_json_dir($dir) 
    {
        if (!is_dir($dir)) {
            mkdir($dir);
        } else {
            return true;
        }
    }

    public function dp_include_json_folder( $path = '' ) 
    {
        // read json
        $json = file_get_contents($path);
        
        // decode
        $json = json_decode($json, true);
	    
	    // return
	    return $json;
	}
}