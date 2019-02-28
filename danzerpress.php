<?php
/*
Plugin Name: Danzerpress Plugin
Description: Adds Danzerpress Sections to theme and other WordPress integrations
Version: 3.0
*/

if (!defined("DP_PLUGIN_URL")) {
    define("DP_PLUGIN_URL", plugin_dir_url( __FILE__ ));    
}

if (!defined("DP_PLUGIN_DIR")) {
    define("DP_PLUGIN_DIR", plugin_dir_path( __FILE__ ));
}

do_action('dp_plugin_init');

$autoload_path = DP_PLUGIN_DIR . '/vendor/autoload.php';        
if ( file_exists( $autoload_path ) ) {
    require_once( $autoload_path );
}

include DP_PLUGIN_DIR . '/lib/dp_functions.php';

/**
 * Allows updates to be sent via github
 */
require 'plugin-update-checker/plugin-update-checker.php';
$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
	'https://github.com/bdanzer/danzerpress-plugin/',
	__FILE__,
	'danzerpress-plugin'
);
$myUpdateChecker->setBranch((get_field('dp_env', 'options')) ?: 'master');

add_action('dp_theme_loaded', function() {
    if (!function_exists('get_field')) {
        return;
    }
    
    new Danzerpress\DP;
});