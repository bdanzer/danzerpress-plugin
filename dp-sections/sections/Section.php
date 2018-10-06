<?php
namespace Danzerpress;

use Danzerpress\AcfContextHelper;
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
		$called_class::section_setup();
	}

	public static function chunk($context) 
	{
		if (array_key_exists('layout', $context)) {
			$context = $context[0];
		} else {
			$context = ['layout' => $context[0]];
		}

		$context['dp'] = new AcfContextHelper;

		$classes = implode(' ', $context['layout']['classes']);
		
		$class = get_called_class();
		$file = 'dp-sections/' . $class::$section_slug . '.twig';

		$html =  Timber::compile('dp-sections/section-parts/section-header.twig', $context);
		$html .= Timber::compile($file, $context);
		$html .= '</div></div>';

		echo $html;
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

	public static function section_setup() 
	{

	}
}