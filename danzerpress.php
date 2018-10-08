<?php
/*
Plugin Name: Danzerpress
Version: 1.0
*/
if (defined("DP_PLUGIN_URL")) {
    define("DP_PLUGIN_URL", plugin_dir_url( __FILE__ ));    
}

$autoload_path = __DIR__ . '/vendor/autoload.php';

if ( file_exists( $autoload_path ) ) {
    require_once( $autoload_path );
}

new Danzerpress\filters\DanzerpressFilters;
new Danzerpress\PluginAssetLoader;
new Danzerpress\DanzerpressPlugin;