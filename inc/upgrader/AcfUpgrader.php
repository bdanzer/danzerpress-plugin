<?php
namespace Danzerpress\upgrader;

class AcfUpgrader {
    protected $wpdb;
    protected $hero_layout = [
        1 => 'full-width',
        2 => 'side-image',
        3 => 'custom-script',
        4 => 'half-and-half'
    ];

    public function __construct() 
    {
        global $wpdb;
        $this->wpdb = $wpdb;

        add_action('dp_updater_ran_ver_3.0', [$this, 'update_3_0']);
    }

    public function update_3_0() 
    {
        //Hero layout for acf
       $sql = "SELECT * FROM `wp_postmeta` 
        WHERE `meta_key` 
        LIKE 'flexible%hero_layout'";

        $results = $this->wpdb->get_results($sql, ARRAY_A);

        foreach ($results as $result) {
            if (array_key_exists($result['meta_value'], $this->hero_layout)) {
                update_metadata('post', $result['post_id'], $result['meta_key'], $this->hero_layout[$result['meta_value']]);
            }
        }
    }
}