<?php
namespace Danzerpress;

use Danzerpress\HeaderBuilder;

class AcfContextHelper
{	
	public function __construct() {}

	public function get_h_tag($content) 
	{
		if (get_section_iterator() === 1 && get_field('title_screen_header')) {
			return '<h1 class="danzerpress-title">' . $content . '</h1>';
		}

		return '<h2 class="danzerpress-title">' . $content . '</h2>';
	}

	public function get_iterator()
	{
		return get_section_iterator();
	}

	public function get_background($iterator) {}

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