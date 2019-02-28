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
			$this->context['post'] = Timber::get_post(get_the_ID(), PostContext::class);
			$this->context['dp'] = new AcfContextHelper;
			$this->context['section'] = Boot::get_sections();
			$this->context['flexible_layout'] = $this->flexible_layout;

			$this->template = 'dp-sections/danzerpress-sections.twig';
	   	} else {
			$this->template = 'dp-sections/no_template.twig';
		}
	}

	public function render() 
	{
		Timber::render($this->template, $this->context, Danzerpress::get_ttl());
	}
}