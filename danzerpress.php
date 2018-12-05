<?php
/*
Plugin Name: Danzerpress
Version: 1.0
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

require 'plugin-update-checker/plugin-update-checker.php';
$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
	'https://github.com/bdanzer/danzerpress-plugin/',
	__FILE__,
	'danzerpress-plugin'
);
//Optional: If you're using a private repository, specify the access token like this:
//$myUpdateChecker->setAuthentication('your-token-here');

//Optional: Set the branch that contains the stable release.
//$myUpdateChecker->setBranch('master');

$myUpdateChecker->getVcsApi()->enableReleaseAssets();

add_action('init', function() {
    new Danzerpress\DP;
});