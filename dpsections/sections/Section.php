<?php
namespace Danzerpress;

use Danzerpress\Sections;
use Danzerpress\Contexts\SectionsContext;
use Timber;

class Section
{
	protected static $context;
	public static $section_name = '';

	public static function create() 
	{
		$called_class = get_called_class();
		$called_class::get_context();
		$called_class::render();
	}

	public static function get_context() 
	{
		/*
		$this->context = [
			'section_name' = $this->section_name,
		];
		*/
	}

	public static function render() 
	{
		/*
		$called_class = get_called_class();

		$section = array(
				$called_class::$section_name => Timber::compile('danzerpress-sections/section' . $called_class::$section_name, $called_class::$context)
			);

		Sections::set_sections($section);
		*/
	}
}