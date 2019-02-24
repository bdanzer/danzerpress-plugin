<?php
namespace Danzerpress\template;

use Danzerpress\DP;

class PluginTemplates {
    protected $templates = [
        'danzerpress-sections.php' => 'Sections - DanzerPress'
    ];
    
    public function __construct() 
    {
        add_filter('theme_page_templates', [$this, 'add_theme_page_templates']);
        add_filter('page_template', [$this, 'add_redirect_page_template']);
        add_filter('wp_insert_post_data', [$this, 'register_project_templates']);
    }

    public function set_templates($templates = []) 
    {
        return array_merge($this->templates, $templates);
    }

    public function get_templates() 
    {
        return $this->templates;
    }

    /**
	 * Adds our template to the pages cache in order to trick WordPress
	 * into thinking the template file exists where it doens't really exist.
	 */
	public function register_project_templates( $atts ) {
		// Create the key used for the themes cache
		$cache_key = 'page_templates-' . md5( get_theme_root() . '/' . get_stylesheet() );
		// Retrieve the cache list. 
		// If it doesn't exist, or it's empty prepare an array
		$templates = wp_get_theme()->get_page_templates();
		if ( empty( $templates ) ) {
			$templates = array();
		} 
		// New cache, therefore remove the old one
		wp_cache_delete( $cache_key , 'themes');
		// Now add our template to the list of templates by merging our templates
		// with the existing templates array from the cache.
		$templates = array_merge( $templates, $this->templates );
		// Add the modified cache to allow WordPress to pick it up for listing
		// available templates
		wp_cache_add( $cache_key, $templates, 'themes', 1800 );
		return $atts;
	}

    public function add_theme_page_templates($templates) {
        $this->set_templates($templates);
        return $this->templates;
    }
    
    public function add_redirect_page_template($template) {
        $post = get_post(); 
        $page_template = basename(get_post_meta( $post->ID, '_wp_page_template', true ));
        $my_templates = $this->get_templates();

        if (!empty($page_template) && array_key_exists($page_template, $my_templates) == $page_template) {
            $template = DP::get_dir() . "/plugin-templates/{$page_template}";
        }

        return $template;
    }
}