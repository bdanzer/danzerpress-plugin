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

	public function __construct($is_block = false) 
	{
		self::$is_section = true;
		$this->context = Danzerpress::get_context();

		add_filter('block_attributes_filter', [$this, 'global_attributes'], 10, 3);
		
		if( have_rows($this->flexible_layout) || $is_block ) {
			$this->init_sections();	

			if (!$is_block) {
				$this->context['post'] = Timber::get_post(get_the_ID(), DanzerpressPostContext::class);
				$this->context['dp'] = new AcfContextHelper;
				$this->context['section'] = $this->sections;
				$this->context['flexible_layout'] = $this->flexible_layout;

				$this->render();
			}
			
	   	} else {
			$this->no_layouts();
		}
	}

	public static function is_section() 
	{
		return self::$is_section;
	}

	//Boot Sections
	public function init_sections() 
	{
		$dir = __DIR__;
		$files = glob($dir . '/sections/*.php');
		foreach ($files as $file) {
			$basename = basename($file, '.php');

			if ($basename === 'Section')
				continue;

			$class = 'Danzerpress\\' . $basename;
			$class = new $class();

			new RegisterBlock($class->get_block_namespace(), $class->get_attributes(), [$class, 'block_render'], true);

			$this->sections[$class::$section_slug] = [
				'section_name' => $class::$section_name,
				'section_class' => $class::$section_name,
				'section_slug' => $class::$section_slug,
			];
		}
	}

	public function global_attributes($atts, $namespace, $is_section = false) 
	{
		if ($is_section) {
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
	
			$atts = array_merge($atts, $array);
		}
	
		return $atts;
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