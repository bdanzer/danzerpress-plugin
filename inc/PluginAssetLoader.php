<?php
namespace Danzerpress;

use Timber;

class PluginAssetLoader {
    protected $plugin_url;

    public function __construct() 
    {
        global $dp_url;
        $this->plugin_url = $dp_url;
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_action('init', [$this, 'timber_locations']);
    }

    public function enqueue_scripts() 
    {
        //plugin css
        wp_enqueue_style('danzerpress-plugin-css', plugins_url() . '/danzerpress-plugin/dist/plugin.min.css');

        //plugin js
        wp_enqueue_script('danzerpress-plugin-js', plugins_url() . '/danzerpress-plugin/dist/plugin.min.js', array(), null, true);
    }

    public function timber_locations() 
    {
        \Timber::$locations = [
            $this->plugin_url . '/resources', 
            $this->plugin_url . '/resources/templates'
        ];
    }
}