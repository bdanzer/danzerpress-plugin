<?php

namespace Danzerpress\acf;

use Danzerpress\DP;

class AcfLayouts {
    protected $parent = 'field_59fa78934bca2';

    public function __construct() 
    {
        add_filter( 'acf/load_field/name=flexible_layout', [$this, 'filter_danzerpress_layouts'], 10, 1);
        add_filter( 'dp_acf_layout_hero', [$this, 'get_hero'], 10, 2);
    }

    public function get_parent() 
    {
        return $this->parent;
    }

    public function get_prepend_fields() 
    {
        $first_unvalid_fields = [
            [
                'key' => 'dp_custom_css_class',
                'label' => 'Custom CSS Class',
                'name' => 'custom_css_class',
                'prefix' => 'acf',
                'type' => 'text',
                'value' => null,
                'menu_order' => 0,
                'instructions' => 'This is not required, this is just for people who want to add more specific CSS styling.',
                'required' => 0,
                'id' => '',
                'class' => '',
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ],
                'default_value' => '', 
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ],
        ];
        $first_unvalid_fields = apply_filters('dp_prepend_global_acf_fields', $first_unvalid_fields);
        return $first_unvalid_fields;
    }

    public function get_fields() 
    {
        $unvalid_fields = [
            [
                'key' => 'dp_section_title',
                'label' => 'Title',
                'name' => 'section_title',
                'prefix' => 'acf',
                'type' => 'text',
                'value' => null,
                'instructions' => '',
                'required' => 0,
                'id' => '',
                'class' => '',
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ],
                'default_value' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ],
            [
                'key' => 'dp_section_description',
                'label' => 'Description',
                'name' => 'section_description',
                'prefix' => 'acf',
                'type' => 'textarea',
                'value' => null,
                'instructions' => '',
                'required' => 0,
                'id' => '',
                'class' => '',
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ],
                'default_value' => '',
                'placeholder' => '',
                'maxlength' => '',
                'rows' => '',
                'new_lines' => '',
            ],
            [
                'key' =>  'dp_button_text_left',
                'label' =>  'Button Text Left', 
                'name' =>  'button_text_left',
                'prefix' =>  'acf' ,
                'type' =>  'text',
                'value' => null,
                'instructions' =>  '',
                'required' => 0,
                'id' =>  '' ,
                'class' =>  '' ,
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' =>  '',
                    'class' =>  '' ,
                    'id' =>  '' ,
                ],
                'default_value' =>  '',
                'placeholder' =>  '',
                'prepend' =>  '',
                'append' =>  '',
                'maxlength' =>  ''
            ],
            [
                'key' =>  'dp_button_text_right',
                'label' =>  'Button Text Right', 
                'name' =>  'button_text_right',
                'prefix' =>  'acf' ,
                'type' =>  'text',
                'value' => null,
                'instructions' =>  '',
                'required' => 0,
                'id' =>  '' ,
                'class' =>  '' ,
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' =>  '',
                    'class' =>  '' ,
                    'id' =>  '' ,
                ],
                'default_value' =>  '',
                'placeholder' =>  '',
                'prepend' =>  '',
                'append' =>  '',
                'maxlength' =>  ''
            ], 
            [
                'key' => 'dp_button_link_left',
                'label' => 'Button Link Left',
                'name' => 'button_link_left',
                'prefix' => 'acf',
                'type' => 'url',
                'value' => null,
                'instructions' => '' ,
                'required' => 0,
                'id' => '' ,
                'class' => '' ,
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ],
                'default_value' => '',
                'placeholder' => '',
            ],
            [
                'key' => 'dp_button_link_right',
                'label' => 'Button Link Right',
                'name' => 'button_link_right',
                'prefix' => 'acf',
                'type' => 'url',
                'value' => null,
                'instructions' => '',
                'required' => 0,
                'id' => '',
                'class' => '',
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' => '',
                    'class' => '', 
                    'id' => '', 
                ],
                'default_value' => '',
                'placeholder' => '',
            ]
        ];
        $unvalid_fields = apply_filters('dp_global_acf_fields', $unvalid_fields);
        return $unvalid_fields;
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

        $dir = dp::get_dir() . "/dp-json/danzerpress-sections.json";
        
        if (is_file($dir) && !IS_DEV) {
            return $this->dp_include_json_folder($dir);
        }

        $prepend_fields = $this->get_prepend_fields();
        $unvalid_fields = $this->get_fields();

        $layouts = [];

        //loop through layouts
        foreach ($field['layouts'] as $key => $layout) {
            //filter to allow changing only specific layouts
            $sub_fields = $field['layouts'][$key]['sub_fields'];
            $sub_fields = apply_filters("dp_acf_layout_{$layout['name']}", $sub_fields, $key);

            //Looping through added fields, validate them, and add to all layouts
            $sub_fields = array_merge($this->dp_acf_get_valid_fields($prepend_fields, $key), $sub_fields);
            
            $field['layouts'][$key]['sub_fields'] = array_merge($sub_fields, $this->dp_acf_get_valid_fields($unvalid_fields, $key));
        }

        //dp_prepend_global_acf_fields
        //dpDie($field['layouts']['59fa84633e52e']['sub_fields']);
        //dpDie($field);

        if (IS_DEV) {
            $this->dp_acf_write_json_field_group($field, 'danzerpress-sections');
        }

        return $field;
    }

    public function get_hero($fields, $key) 
    {
        return $fields;
        $first_unvalid_fields = [
        ];

        $unvalid_fields = [
        ];

        //$fields = apply_filters('dp_prepend_acf_fields', $value);

        //merge to the beginning
        $fields = array_merge($this->dp_acf_get_valid_fields($first_unvalid_fields, $key), $fields);

        //merge to the end
        $fields = array_merge($fields, $this->dp_acf_get_valid_fields($unvalid_fields, $key));
        return $fields;
    }

    public function dp_acf_write_json_field_group( $field_group, $file ) 
    {
        // vars
        $path = DP::get_dir() . '/dp-json';
        $file = "{$file}.json";
    
        // write file
        $f = fopen("{$path}/{$file}", 'w');
        fwrite($f, acf_json_encode( $field_group ));
        fclose($f);
        
        // return
        return true;
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