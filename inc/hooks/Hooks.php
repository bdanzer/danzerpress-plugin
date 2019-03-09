<?php
namespace Danzerpress\hooks;

class Hooks {
    public function __construct() 
    {
        add_filter('danzerpress_chunk_namespaces', [$this, 'add_to_namespaces']);
        add_filter('upload_mimes', [$this, 'supported_mimes']);
    }

    public function add_to_namespaces($namespaces) 
    {
        return array_merge($namespaces, ['Danzerpress\\chunks\\DP\\']);
    }

    public function supported_mimes($mimes)
    {
        $mimes['svg'] = 'image/svg+xml';
        return $mimes;
    }
}