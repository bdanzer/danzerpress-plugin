<?php
/*
Plugin Name: Danzerpress Plugin
Description: Adds Danzerpress Sections to theme and other WordPress integrations
Version: 1.4
*/

if (!defined("DP_PLUGIN_URL")) {
    define("DP_PLUGIN_URL", plugin_dir_url( __FILE__ ));    
}

if (!defined("DP_PLUGIN_DIR")) {
    define("DP_PLUGIN_DIR", __DIR__);
}

$autoload_path = DP_PLUGIN_DIR . '/vendor/autoload.php';        
if ( file_exists( $autoload_path ) ) {
    require_once( $autoload_path );
}

/**
 * Allows updates to be sent via github
 */
require 'plugin-update-checker/plugin-update-checker.php';
$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
	'https://github.com/bdanzer/danzerpress-plugin/',
	__FILE__,
	'danzerpress-plugin'
);

$myUpdateChecker->getVcsApi()->enableReleaseAssets();
$myUpdateChecker->setBranch('master');

add_action('init', function() {
    if (!class_exists('Danzerpress\\DP_Theme') && !is_admin()) {
        return;
    }

    if (!function_exists('get_field')) {
        return;
    }
    
    new Danzerpress\DP;
    
});

add_action('init', function() {
    new Danzerpress\Sections(true);
});