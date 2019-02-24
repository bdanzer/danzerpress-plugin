<?php
namespace Danzerpress\upgrader;

class AcfUpgrader {
    /**
     * flexible_layout_0_hero_layout
     * 1 => full-width
     * 2 => side-image
     * 3 => custom-script
     * 4 => half-and-half
     */
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

        if (get_option('danzerpress_hero_layout_update') < 1) {
            $this->update_hero_layouts();
        }
    }

    public function update_hero_layouts() 
    {
       $sql = "SELECT * FROM `wp_postmeta` 
        WHERE `meta_key` 
        LIKE 'flexible%hero_layout'";

        $results = $this->wpdb->get_results($sql, ARRAY_A);

        foreach ($results as $result) {
            //update_metadata('post', $result['post_id'], $result['meta_key'], $this->hero_layout[$result['meta_value']]);
        }

        update_option('danzerpress_hero_layout_update', 1);
    }
}