<?php
namespace Danzerpress;

use Timber;

class PluginAssetLoader {
    protected $plugin_url;

    public function __construct() 
    {
        global $dp_url;
        $this->plugin_url = $dp_url;
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts'], 102);
    }

    public function enqueue_scripts() 
    {
        if (true === IS_DEV) {
            $plugin_url = plugins_url() . '/danzerpress-plugin/';
        } else {
            $plugin_url = plugins_url() . '/dp-plugin/';
        }

        //plugin css
        wp_enqueue_style('danzerpress-plugin-css', $plugin_url . 'dist/plugin.min.css');

        //plugin js
        wp_enqueue_script('danzerpress-plugin-js', $plugin_url . 'dist/plugin.min.js', array(), null, true);
    }
}