<?php
namespace Danzerpress;

use Danzerpress\Contexts\Danzerpress;
use Danzerpress\Contexts\DanzerpressPostContext;
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
		
		if( have_rows($this->flexible_layout) ) {
			$this->init_sections();	

			$this->context['post'] = Timber::get_post(get_the_ID(), DanzerpressPostContext::class);
			$this->context['dp'] = new AcfContextHelper;
			$this->context['section'] = $this->sections;
			$this->context['flexible_layout'] = $this->flexible_layout;
			
			$this->render();
	   	} else {
			$this->no_layouts();
		}
	}

	public static function is_section() 
	{
		return self::$is_section;
	}

	public function init_sections() 
	{
		$dir = __DIR__;
		$files = glob($dir . '/sections/*.php');
		foreach ($files as $file) {
			$basename = basename($file, '.php');

			if ($basename === 'Section') {
				continue;
			}

			$class = 'Danzerpress\\' . $basename;
			$class::init();

			$this->sections[$class::$section_slug] = [
				'section_name' => $class::$section_name,
				'section_class' => $class::$section_name,
				'section_slug' => $class::$section_slug,
			];
		}
	}

	public function no_layouts() 
	{
		Timber::render('dp-sections/no_template.twig', $this->context);
	}

	public function loop_layouts() 
	{
		Timber::render('dp-sections/danzerpress-sections.twig', $this->context, Danzerpress::get_ttl());
	}

	public function render() 
	{
		$this->loop_layouts();
	}
}