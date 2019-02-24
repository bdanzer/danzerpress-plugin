<?php
namespace Danzerpress;

use Timber;

class PluginAssetLoader {

    public function __construct() 
    {
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts'], 102);
    }

    public function enqueue_scripts() 
    {
        //plugin css
        wp_enqueue_style('danzerpress-plugin-css', DP::get_url() . '/dist/plugin.min.css', [], DP::get_ver());

        //plugin js
        wp_enqueue_script('danzerpress-plugin-js', DP::get_url() . '/dist/plugin.min.js', [], DP::get_ver(), true);
    }
}