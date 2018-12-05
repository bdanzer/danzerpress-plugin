<?php
namespace Danzerpress\hooks;

class Hooks {
    public function __construct() 
    {
        add_filter('danzerpress_chunk_namespaces', [$this, 'add_to_namespaces']);
    }

    public function add_to_namespaces($namespaces) 
    {
        return array_merge($namespaces, ['Danzerpress\\chunks\\DP\\']);
    }
}