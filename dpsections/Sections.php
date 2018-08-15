<?php
namespace Danzerpress;

use Timber;
use Danzerpress\Contexts\Danzerpress;
use Danzerpress\Contexts\DanzerpressPostContext;

class Sections 
{
	protected static $sections = [];
	protected $flexible_layout = 'flexible_layout';
	private $context = [];

	public function __construct() 
	{
		if( have_rows($this->flexible_layout) ) {
			Hero::create();
			Media::create();
			Icon::create();
			Gallery::create();
			Text::create();
			RawCode::create();
			Price::create();
			Action::create();
			Testimonial::create();

			$this->context = Danzerpress::get_context();
			$this->context['post'] = Timber::get_post(get_the_ID(), new DanzerpressPostContext());
			$this->context['dp'] = new AcfContextHelper;
			$this->context['iterator'] = 0;
	   		$this->context['section'] = self::$sections;
	   		$this->context['flexible_layout'] = $this->flexible_layout;
	   		
			$this->render();
	   	}
	}

	public static function get_sections() 
	{
		return $this->sections;
	}

	public static function set_sections($section) 
	{
		self::$sections[$section['section_slug']] = $section;
	}

	public function loop_layouts() 
	{
		Timber::render('templates/dp-sections/danzerpress-sections.twig', $this->context, Danzerpress::get_ttl());
	}

	public function render() 
	{
		$this->loop_layouts();
	}
}