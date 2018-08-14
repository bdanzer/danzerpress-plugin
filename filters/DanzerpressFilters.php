<?php
namespace Danzerpress\filters;

class DanzerpressFilters extends TwigFilters {
	public function __construct() 
	{
		parent::__construct();
	}

	public function snake($string) 
	{
		$string = strtolower(str_replace(' ', '_', trim($string)));
		return $string;
    }
}