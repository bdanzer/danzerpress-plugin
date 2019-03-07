<?php
namespace Danzerpress;

use Danzerpress\contexts\Danzerpress;
use Danzerpress\AcfContextHelper;
use Danzerpress\Sections;
use Danzerpress\contexts\SectionsContext;
use Timber;

class Section
{
	protected static $context;
	public static $section_name = '';
	public static $section_slug = '';
	public $block_namespace;
	protected $css = [];
	protected $attributes = [];

	public function __construct() 
	{
		$this->set_attributes($this->global_attributes());
		$this->section_setup();
	}

	/**
	 * This is what boots the section
	 */
	public function section_setup() {}

	/**
	 * This is for custom gutenberg blocks
	 */
	public function block_render($atts, $content) {}

	public function global_attributes() 
	{
		$array = [
			'section_title' => [
				'type' => 'string',
				'items' => [
					'type' => 'string',
				]
			],
			'section_description' => [
				'type' => 'string',
				'items' => [
					'type' => 'string',
				]
			],
			'section_padding' => [
				'type' => 'number',
				'default' => 140
			]
		];

		return apply_filters('dp_global_attributes', $array);
	}

	public function set_attributes($attributes) 
	{
		$this->attributes = array_merge($this->attributes, $attributes);
	}

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
		$header_builder = new HeaderBuilder($context);
		return $header_builder->build_header();
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

		$html = self::get_compiled_section($context);

		echo $html;
	}

	public static function get_compiled_section($layout, $_context = '') 
	{
		if ($_context) {
			$context = $_context;
		} else {
			$context = [];
		}
		
		$called_class = get_called_class();

		$context['dp'] = new AcfContextHelper;
		$context['layout'] = $layout;

		if (!isset($context['layout']['sections'])) {
			$context['layout']['sections'] = [
				'section_name' => $called_class::$section_name,
				'section_class' => $called_class::$section_name,
				'section_slug' => $called_class::$section_slug
			];
		}

		$file = 'dp-sections/' . $called_class::$section_slug . '.twig';

		$context = apply_filters("dp_section_{$called_class::$section_slug}_context", $context);

		$section_header_html = apply_filters("dp_secton_header_html_{$called_class::$section_slug}", self::get_section_header($context['layout']), $context);
		$section_body_html = apply_filters("dp_section_body_html_{$called_class::$section_slug}", Timber::compile($file, $context, Danzerpress::get_ttl()), $context, get_section_iterator());
		$section_footer_html = apply_filters("dp_section_footer_html_{$called_class::$section_slug}", self::get_section_footer(), $context);

		return $section_header_html . $section_body_html . $section_footer_html;
	}
}