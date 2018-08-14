<?php
namespace Danzerpress\filters;

/**
 * Helper class to create twig filters really easy
 */
class TwigFilters {
	protected $functions;

	public function __construct() 
	{
		$this->__que_functions($this->__set_functions());
	}

	public function __set_functions() {
		$this->functions = [];
		$methods = get_class_methods($this);
		

		foreach ($methods as $method) {
			if (false === strpos($method, '__')) {
				$this->functions[] = ['name' => $method];
			}
		}

		return $this->functions;
	}

	public function __que_functions($functions)
	{
		add_filter('timber/twig', function($twig) {
			foreach ($this->functions as $value) {
				$twig->addFilter(new \Twig_SimpleFilter($value['name'], [$this, $value['name']]));
			}
			return $twig;
		});
	}
}