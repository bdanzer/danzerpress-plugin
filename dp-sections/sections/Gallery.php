<?php
namespace Danzerpress;

use Danzerpress\Section;
use Danzerpress\Sections;
use Timber;

class Gallery extends Section
{
	protected static $context;
	public static $section_name = 'simple-gallery-section';
	public static $section_slug = 'gallery';

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
}