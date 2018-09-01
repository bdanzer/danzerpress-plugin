<?php
namespace Danzerpress;

use Danzerpress\Section;
use Danzerpress\Sections;
use Timber;

class Map extends Section
{
	protected static $context;
	public static $section_name = 'danzerpress-map-section';
	public static $section_slug = 'map';

	public static function get_context() 
	{
		self::$context = [
			'section_name' => self::$section_slug,
		];
	}

	public static function render() 
	{
		$section = array(
			'section_slug' => self::$section_slug,
			'section_name' => self::$section_name,
			'section_class' => [self::$section_name],
		);

		Sections::set_sections($section);
	}

	public static function section_setup() 
	{	
		add_action('acf/init', [self::class, 'my_acf_init']);
	}

	public static function my_acf_init() {
		acf_update_setting('google_api_key', get_field('google_map_api', 'option'));
	}
}