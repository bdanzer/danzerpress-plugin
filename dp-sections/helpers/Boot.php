<?php
namespace Danzerpress;

class Boot 
{
	protected $sections_loaded = false;
	protected $sections = [];

	public function __construct() {}
		
	public function get_sections() 
	{
		return $this->sections;
	}

    public function load_sections() 
    {
        $this->sections_loaded = apply_filters('dp_sections_loaded', true);

        $dir = dp::get_dir();
        $files = glob($dir . '/dp-sections/sections/*.php');
        
		foreach ($files as $file) {
			$basename = basename($file, '.php');

			if ($basename === 'Section' && !class_exists($basename))
                continue;

			$class = apply_filters('pre_boot_section', 'Danzerpress\\' . $basename, $basename);
			$class = new $class();

			new RegisterBlock($class->get_block_namespace(), $class->get_attributes(), [$class, 'block_render'], true);

			$this->sections[$class::$section_slug] = [
				'section_name' => $class::$section_name,
				'section_class' => $class::$section_name,
				'section_slug' => $class::$section_slug,
			];
		}
    }
}