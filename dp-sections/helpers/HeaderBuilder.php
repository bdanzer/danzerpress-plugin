<?php
namespace Danzerpress;

use Danzerpress\contexts\Danzerpress;
use Timber;

class HeaderBuilder 
{
    protected static $iterator = 0;
    protected $post_id;
    protected $background_type;
    protected $section_background;
    protected $background_color;
    protected $custom_css_class;
    protected $classes = [];
    protected $styles = '';
    protected $hero_layout;

    public function __construct($layout) 
    {
        self::$iterator++;
        $this->post_id = (get_the_ID()) ?: null;
        $this->hero_layout = (isset($layout['hero_layout'])) ? $layout['hero_layout'] : null;
        $this->background_type = (isset($layout['background_type'])) ? $layout['background_type'] : null;
        $this->section_background = (isset($layout['section_background'])) ? $layout['section_background'] : null;
        $this->background_color = (isset($layout['background_color'])) ? $layout['background_color'] : null;
        $this->custom_css_class = (isset($layout['custom_css_class'])) ? $layout['custom_css_class'] : null;
        $this->text_align = (isset($layout['text_align'])) ? $layout['text_align'] : null;
        $this->classes[] = (isset($layout['sections']['section_class'])) ? $layout['sections']['section_class'] : null;
    }

    public static function get_iterator() {
        return self::$iterator;
    }

    public function is_odd($iterator) 
	{
        return ($iterator % 2 == 0) ? 'danzerpress-odd' : 'danzerpress-even';
    }

    public function class_handler($classes) 
    {
        $classes[] = $this->is_odd(self::$iterator);

        if ($this->custom_css_class) {
            $classes[] = $this->custom_css_class;
        }

        if ($this->hero_layout) {
			$classes[] = $this->hero_layout;
        }

        if ($this->text_align) {
            $classes[] = $this->text_align;
        }

		if (self::$iterator == 1 && get_field('full_screen_section_1', 'option') && is_front_page()) {
			$classes[] = 'dp-full-height';
        }
        
        if ($classes) {
			$classes = implode(" ", $classes);
        }

        return $classes;
    }

    public function style_handler($styles) 
    {
        $this->styles .= $styles;
    }
    
    public function build_header()
	{
        $context = [];

		if ($this->section_background && $this->background_type == 'image') {
            $context['image_class'] = 'danzerpress-parallax';
            $context['image_url'] = $this->section_background;
            $this->classes[] = 'parallax-section';
            $this->classes[] = 'background-type-image';
        }
        
        if ($this->background_color && $this->background_type == 'color') {
            $this->style_handler('background:' . $this->background_color . ';');
            $this->classes[] = 'background-type-color';
        }

        $context['section_id'] = 'section-' . self::$iterator;
        $context['section_class'] = 'danzerpress-section ' . $this->class_handler($this->classes);
        $context['section_style'] = $this->styles;

        return Timber::compile('dp-sections/section-parts/section-header.twig', $context, Danzerpress::get_ttl());
    }
}