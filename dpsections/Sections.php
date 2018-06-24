<?php
namespace Danzerpress;

use Timber;
use Danzerpress\Hero;
use Danzerpress\Media;
use Danzerpress\Icon;
use Danzerpress\Gallery;
use Danzerpress\Text;
use Danzerpress\RawCode;
use Danzerpress\AcfContextHelper;

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

			$this->context = Timber::get_context();
			$this->context['post'] = Timber::get_post(get_the_ID());
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
		$cache = (get_field('cache', 'option')) ? 900 : null;
		Timber::render('templates/dp-sections/danzerpress-sections.twig', $this->context);
	}

	public function render() 
	{
		$this->loop_layouts();
	}
}