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
	public $block_namespace;
	protected $css;
	protected $attributes = [];

	public function __construct() 
	{
		$this->section_setup();
	}

	/**
	 * This is what boots the section
	 */
	public function section_setup() {}

	public function get_css() 
	{
		return $this->css;
	} 

	public function get_block_namespace() 
	{
		$called_class = get_called_class();
		$section_slug = $called_class::$section_slug;
		return $this->block_namespace = "dp/{$section_slug}-section";
	}

	public function get_attributes() 
	{
		return $this->attributes;
	}

	public static function get_section_header($context) 
	{
		return Timber::compile('dp-sections/section-parts/section-header.twig', $context, Danzerpress::get_ttl());
	}

	public static function get_section_footer() 
	{
		return Timber::compile('dp-sections/section-parts/section-footer.twig', null, Danzerpress::get_ttl());
	}

	public static function chunk($context) 
	{
		if (array_key_exists('layout', $context)) {
			$context = $context[0];
		} else {
			$context = ['layout' => $context[0]];
		}

		self::get_compiled_section($context);

		echo $html;
	}

	public static function get_compiled_section($layout) 
	{
		$called_class = get_called_class();

		$context = [];

		$context['dp'] = new AcfContextHelper;
		$context['layout'] = $layout;

		if (!isset($layout['sections'])) {
			$context['layout']['sections'] = [
				'section_name' => $called_class::$section_name,
				'section_class' => $called_class::$section_name,
				'section_slug' => $called_class::$section_slug
			];
		}

		$file = 'dp-sections/' . $called_class::$section_slug . '.twig';

		$html =  self::get_section_header($context);
		$html .= Timber::compile($file, $context, Danzerpress::get_ttl());
		$html .= self::get_section_footer();

		return $html;
	}
}