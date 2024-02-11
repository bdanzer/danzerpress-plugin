<?php
namespace Danzerpress;

use Danzerpress\filters\DanzerpressFilters;
use Danzerpress\filters\TwigFunctions;
use Danzerpress\acf\AcfLayouts;
use Danzerpress\acf\AcfFields;
use Danzerpress\hooks\Hooks;
use Danzerpress\upgrader\AcfUpgrader;
use Danzerpress\template\PluginTemplates;
use Danzerpress\autoinstaller\RegisterPlugins;
use Danzerpress\DP_Theme;
use Danzerpress\Twig\TwigLoading;

class DP 
{
    protected $dp_plugin_db_ver_key = 'dp_plugin_ver';

    public function __construct() 
    {
        new DP_Theme;

        /**
         * Caching clearing to add?
         * $loader = new \TimberLoader();
         * $loader->clear_cache_timber();
         * $loader->clear_cache_twig();
         */
        do_action('dp_plugin_pre_load');

        // if (!class_exists('Danzerpress\\DP_Theme')) {
        //     add_action( 'admin_notices', [$this, 'sample_admin_notice__error'] );
        //     return;
        // }
        $this->set_constants();
        add_filter('acf/fields/google_map/api', [$this, 'my_acf_google_map_api']);

        new Hooks;
        new DanzerpressFilters;
        new TwigLoading;
        new TwigFunctions;
        new PluginAssetLoader;
        new AcfFields;
        new AcfLayouts;
        new AcfUpgrader;
        new PluginTemplates;
        new RegisterPlugins;

        $boot = new Boot();
        $boot->load_sections();
        
        do_action('dp_plugin_loaded');

        $this->check_for_updates();
    }

    public function set_constants() {}   

    public function sample_admin_notice__error() {
        $class = 'notice notice-error';
        $message = __( 'DanzerPress Theme is required for DanzerPress plugin to work. Functionality will be disabled until theme is activated.', 'sample-text-domain' );
        
        printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), esc_html( $message ) ); 
    }

    public function my_acf_google_map_api($api)
    {
        $api['key'] = get_field('google_map_api', 'option');
        return $api;
    }

    public static function get_url()
    {
        return DP_PLUGIN_URL;
    }

    public static function get_dir()
    {
        return DP_PLUGIN_DIR;
    }

    public static function get_ver() 
    {
        $plugin_data = get_file_data(self::get_dir() . '/danzerpress.php', array('Version' => 'Version'), false);
        $plugin_version = $plugin_data['Version'];
        
        return $plugin_version;
    }

    public function check_for_updates() 
    {
        if (get_option($this->dp_plugin_db_ver_key) !== self::get_ver()) {
            update_option($this->dp_plugin_db_ver_key, self::get_ver());
            do_action('dp_updater_ran_ver_' . self::get_ver());
        }
    }
}