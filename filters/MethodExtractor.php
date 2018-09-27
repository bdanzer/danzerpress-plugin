<?php
namespace Danzerpress\filters;

/**
 * Helper class to create twig filters really easy
 */
class MethodExtractor {
    protected $functions;

	public function __construct() 
	{
        $this->__set_functions();
        $this->__que_functions();
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
    
    public function __que_functions() {} //Override this
}