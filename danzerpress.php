<?php
/*
Plugin Name: Danzerpress Plugin
Description: Adds Danzerpress Sections to theme and other WordPress integrations
Version: 5.0.0
*/

namespace Danzerpress;

/**
 * Basically just want to prevent fatal erros if it was 
 * activated twice for whatever reason
 */
if (class_exists(DP::class))
    return;

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

$timber = new \Timber\Timber();

require DP_PLUGIN_DIR . '/lib/dp_functions.php';
require DP_PLUGIN_DIR . '/lib/plugin_activation.php';
require DP_PLUGIN_DIR . '/resources/typescript-wp-block/typescript-wp-block.php';

/**
 * Allows updates to be sent via github
 */
require 'plugin-update-checker/plugin-update-checker.php';

add_filter('acf/settings/load_json', function ($paths) {
    // wp_die();
    // Remove the default path (usually the theme's acf-json directory)
    unset($paths[0]);

    // Add your plugin's acf-json directory to the paths array
    $paths[] = plugin_dir_path(__FILE__) . 'acf-json';

    return $paths;
});

add_action('plugins_loaded', function() {
    if (!function_exists('get_field')) {
        return;
    }

    $myUpdateChecker = \Puc_v4_Factory::buildUpdateChecker(
        'https://github.com/bdanzer/danzerpress-plugin/',
        __FILE__,
        'danzerpress-plugin'
    );
    $myUpdateChecker->setBranch((function_exists('get_field') && get_field('dp_env', 'options')) ? get_field('dp_env', 'options') : 'master');
    
    new DP;
});

include DP_PLUGIN_DIR . '/resources/gutenberg/init.php';