<?php
namespace Danzerpress;

use Danzerpress\contexts\Danzerpress;
use Danzerpress\contexts\PostContext;
use Timber;

class Sections 
{
	protected $sections = [];
	protected $flexible_layout = 'flexible_layout';
	private $context = [];
	protected static $is_section = false;
	protected $section_html = '';

	public function __construct() 
	{
		self::$is_section = true;
		$this->context = Danzerpress::get_context();
		$this->set_sections();
	}

	public static function is_section() 
	{
		return self::$is_section;
	}

	public function set_sections() 
	{
		if (have_rows($this->flexible_layout)) {
			$this->set_sections_html();

			$this->context['post'] = Timber::get_post(get_the_ID(), PostContext::class);
			$this->context['sections_html'] = $this->section_html;
			
			$this->template = 'dp-sections/danzerpress-sections.twig';
	   	} else {
			$this->template = 'dp-sections/no_template.twig';
		}
	}

	public function set_section_html($section_html)
	{
		$this->section_html .= $section_html;
	}

	/**
	 * The idea is to craete a way to create a filterable sections call
	 */
	public function set_sections_html()
	{
		$fields = get_field($this->flexible_layout);

		foreach ($fields as $field) {
			$section = $field['acf_fc_layout'];
			$class = __NAMESPACE__ . '\\' . $section;

			if (array_key_exists($section, Boot::get_sections())) {
				$this->set_section_html($class::get_compiled_section($field));
			}
		}
	}

	public function render() 
	{
		Timber::render($this->template, $this->context, Danzerpress::get_ttl());
	}
}