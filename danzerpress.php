<?php
/*
Plugin Name: Danzerpress
*/

$dp_url = plugin_dir_path( __FILE__ );
$autoload_path = __DIR__ . '/vendor/autoload.php';

if ( file_exists( $autoload_path ) ) {
    require_once( $autoload_path );
}

new Danzerpress\filters\DanzerpressFilters;
new Danzerpress\PluginAssetLoader;