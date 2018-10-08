<?php
namespace Danzerpress;

use Danzerpress\Contexts\Danzerpress;
use Danzerpress\AcfContextHelper;
use Danzerpress\Sections;
use Danzerpress\Contexts\SectionsContext;
use Timber;

class Section
{
	protected static $context;
	public static $section_name = '';
	public static $section_slug = '';

	public static function create() 
	{
		$called_class = get_called_class();
		$called_class::section_setup();
	}

	public static function get_section_header($context) 
	{
		return Timber::compile('dp-sections/section-parts/section-header.twig', $context, Danzerpress::get_ttl());
	}

	public static function get_section_footer() 
	{
		return Timber::compile('dp-sections/section-parts/section-footer.twig', $context, Danzerpress::get_ttl());
	}

	public static function chunk($context) 
	{
		$class = get_called_class();

		if (array_key_exists('layout', $context)) {
			$context = $context[0];
		} else {
			$context = ['layout' => $context[0]];
		}

		$context['dp'] = new AcfContextHelper;
		$context['layout']['sections'] = [
			'section_name' => $class::$section_name,
			'section_class' => $class::$section_name . ' ' . $context['layout']['classes'],
			'section_slug' => $class::$section_slug
		];

		$file = 'dp-sections/' . $class::$section_slug . '.twig';

		$html =  self::get_section_header($context);
		$html .= Timber::compile($file, $context, Danzerpress::get_ttl());
		$html .= self::get_section_footer();

		echo $html;
	}

	public static function section_setup() {}
}