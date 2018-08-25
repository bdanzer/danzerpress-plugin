<?php
namespace Danzerpress;

class PluginAssetLoader {
    public function __construct() 
    {
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts']);
    }

    public function enqueue_scripts() 
    {
        //wp_enqueue_style('child-theme', plugins_url() . '/danzerpress-plugin/dist/js/plugin.js', ['parent-theme']);

        //child theme js
        wp_enqueue_script('danzerpress-plugin-js', plugins_url() . '/danzerpress-plugin/dist/plugin.min.js', array(), null, true);
    }
}