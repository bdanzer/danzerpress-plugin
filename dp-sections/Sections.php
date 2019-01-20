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
		$this->is_block = $is_block;
		self::$is_section = true;
		$this->context = Danzerpress::get_context();

		add_filter('block_attributes_filter', [$this, 'global_attributes'], 10, 3);
		
		$this->boot();
	}

	public static function is_section() 
	{
		return self::$is_section;
	}

	public function boot() 
	{
		if( have_rows($this->flexible_layout) || $this->is_block ) {
			(new Boot())->load_sections();

			if (!$this->is_block) {
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