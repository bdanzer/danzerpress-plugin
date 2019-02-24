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
    }

    public function set_templates($templates = []) 
    {
        return array_merge($this->templates, $templates);
    }

    public function get_templates() 
    {
        return $this->templates;
    }

    public function add_theme_page_templates($templates) {
        $this->set_templates($templates);
        return $this->templates;
    }
    
    public function add_redirect_page_template($template) {
        $post = get_post(); 
        $page_template = basename(get_post_meta( $post->ID, '_wp_page_template', true ));
        $my_templates = $this->get_templates();

        if (array_key_exists($page_template, $my_templates) == $page_template) {
            $template = DP::get_dir() . "/plugin-templates/{$page_template}";
        }

        return $template;
    }
}