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
        //plugin css
        wp_enqueue_style('danzerpress-plugin-css', DP_PLUGIN_URL . 'dist/plugin.min.css', array(), DP_CACHE_BUFFER);

        //plugin js
        wp_enqueue_script('danzerpress-plugin-js', DP_PLUGIN_URL . 'dist/plugin.min.js', array(), DP_CACHE_BUFFER, true);
    }
}