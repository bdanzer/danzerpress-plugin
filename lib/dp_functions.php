<?php

function is_section() 
{
    $sections = 'Danzerpress\\Sections';
    return $sections::is_section();
}

function has_sections_loaded() 
{
    $boot = 'Danzerpress\\Boot';
    return $boot::has_sections_loaded();
}

function has_dp_blocks( $post = null ) {
    if ( ! is_string( $post ) ) {
        $wp_post = get_post( $post );
        if ( $wp_post instanceof WP_Post ) {
            $post = $wp_post->post_content;
        }
    }
 
    return false !== strpos( (string) $post, '<!-- wp:dp/' );
}