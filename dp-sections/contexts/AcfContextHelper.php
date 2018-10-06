<?php
namespace Danzerpress;

class AcfContextHelper
{	
	public function __construct() 
	{

	}

	public function is_odd($iterator) 
	{
		if ($iterator % 2 == 0) {
			return [
				'section_type' => 'danzerpress-odd',
				'color' => 'danzerpress-grey'
			];
		} else {
			return [
				'section_type' => 'danzerpress-even',
				'color' => 'danzerpress-white',
			];
		}
	}

	public function header_builder($background_type, $section_background, $background_color, $iterator, $classes)
	{
		if ($section_background && $background_type == 'image') {
			$end = '<img class="danzerpress-parallax" src=" ' .$section_background. '"/>';
			$classes[] = 'parallax-section';
		}

		if ($background_type == 'half-and-half') {
			$classes[] = 'half-and-half';
		}

		if ($iterator == 1 && get_field('full_screen_section_1', 'option') && is_front_page()) {
			$classes[] = 'dp-full-height';
		}

		if ($classes) {
			$classes = implode(" ", $classes);
		}
		

		$html = '<div ';
		$html .= 'id="section-' . $iterator . '"';
		$html .= 'class="danzerpress-section ' . $classes . '"'; 

		if ($background_color && $background_type == 'color') {
			$html .= 'style="background:' . $background_color . ';"';
		} 

		$html .= '>';

		if (isset($end)) {
			$html .= $end;
		}

		return $html;
	}

	public function custom_css($css)
	{
		if ($css) {
			return $css;
		}

		return '';
	}

	public function get_color($type)
	{
		if ($type != 'image' && $type != 'color') {
			return 'danzerpress-color-grey';
		} else {
			return 'danzerpress-color-white';
		}
		
	}

	public function get_background($iterator)
	{

	}

	public function section_image($section_image) 
	{
		if ($section_image) {
			return $section_image;	
		} else {
			return 'https://unsplash.it/1920/1080/?random';
		}
	}

	public function build_video($section_video) {
		// get iframe HTML
		if ($section_video) {
			$iframe = $section_video;

			// use preg_match to find iframe src
			preg_match('/src="(.+?)"/', $iframe, $matches);
			$src = $matches[1];

			// add extra params to iframe src
			$params = array(
			    'controls'    => 0,
			    'showinfo'    => 0,
			    'rel'		  => 0,
			);

			$new_src = add_query_arg($params, $src);
			$iframe = str_replace($src, $new_src, $iframe);

			// add extra attributes to iframe html
			$attributes = 'frameborder="0" allowfullscreen';

			$iframe = str_replace('></iframe>', ' ' . $attributes . '></iframe>', $iframe);

			return $iframe;
		}
	}

	public function image_side($image_side) 
	{
		if (!$image_side) return;

		if ( $image_side == 'right' ) {
		    $order = 'danzerpress-order-1';
		    $wowclass = 'slideInRight';

		} elseif ($image_side == 'left') {
		    $order = 'danzerpress-order-0';
		    $wowclass = 'slideInLeft';
		} 

		return [
	    	'order' => $order, 
	    	'wow' => $wowclass
	    ];
	}

	public function get_stars($stars) 
    {
        $html = '';
        for ($i = 0; $i < (int)$stars; $i++) {
            $html .= '<i class="fa fa-star"></i>';
        }
        return $html;
    }
}