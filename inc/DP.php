<?php
namespace Danzerpress;

use Danzerpress\filters\DanzerpressFilters;
use Danzerpress\filters\TwigFunctions;
use Danzerpress\acf\AcfLayouts;
use Danzerpress\hooks\Hooks;

class DP {
    public function __construct() 
    {
        if (!class_exists('Danzerpress\\DP_Theme')) {
            add_action( 'admin_notices', [$this, 'sample_admin_notice__error'] );
            return;
        }
        $this->set_constants();
        add_action('acf/init', [$this, 'my_acf_init']);

        new Hooks;
        new DanzerpressFilters;
        new TwigFunctions;
        new PluginAssetLoader;
        new AcfLayouts;
    }

    public function set_constants() {}   

    public function sample_admin_notice__error() {
        $class = 'notice notice-error';
        $message = __( 'DanzerPress Theme is required for DanzerPress plugin to work. Functionality will be disabled until theme is activated.', 'sample-text-domain' );
        
        printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), esc_html( $message ) ); 
    }

    public function my_acf_init() {
        acf_update_setting('google_api_key', get_field('google_map_api', 'option'));
    }

    public static function get_url()
    {
        return DP_PLUGIN_URL;
    }

    public static function get_dir()
    {
        return DP_PLUGIN_DIR;
    }
}