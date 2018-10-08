<?php
namespace Danzerpress;

class DanzerpressPlugin {
    public function __construct() 
    {
        add_action('acf/init', [$this, 'my_acf_init']);
    }

    public function my_acf_init() {
        acf_update_setting('google_api_key', get_field('google_map_api', 'option'));
    }
}