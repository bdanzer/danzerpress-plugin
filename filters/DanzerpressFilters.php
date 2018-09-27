<?php
namespace Danzerpress\filters;

class DanzerpressFilters extends MethodExtractor {
	public function __construct() 
	{
		parent::__construct();
	}

	public function __que_functions()
	{
		add_filter('timber/twig', function($twig) {
			foreach ($this->functions as $value) {
				$twig->addFilter(new \Twig_SimpleFilter($value['name'], [$this, $value['name']]));
			}
			return $twig;
		});
	}

	public function snake($string) 
	{
		$string = strtolower(str_replace(' ', '_', trim($string)));
		return $string;
    }
}