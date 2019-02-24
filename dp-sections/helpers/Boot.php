<?php
namespace Danzerpress;

class Boot 
{
	protected static $sections_loaded = false;
	protected static $sections = [];

	public function __construct() {}

	public static function has_sections_loaded() 
	{
		return self::$sections_loaded;
	}
		
	public static function get_sections() 
	{
		return self::$sections;
	}

    public function load_sections() 
    {
        $dir = dp::get_dir();
        $files = glob($dir . '/dp-sections/sections/*.php');
		
		/**
		 * File name dictates class used
		 */
		foreach ($files as $file) {
			$basename = basename($file, '.php');

			if ($basename === 'Section' && !class_exists($basename))
                continue;

			do_action("pre_boot_section_{$basename}");

			$class = apply_filters('pre_boot_section', 'Danzerpress\\' . $basename, $basename);
			$class = new $class();

			do_action("boot_section_{$basename}");

			new RegisterBlock($class->get_block_namespace(), $class->get_attributes(), [$class, 'block_render'], true);

			self::$sections[$class::$section_slug] = [
				'section_name' => $class::$section_name,
				'section_class' => $class::$section_name,
				'section_slug' => $class::$section_slug,
			];

			new CssBuilder($class::$section_slug, $class->get_css());
		}

		self::$sections_loaded = apply_filters('dp_sections_loaded', true);
    }
}