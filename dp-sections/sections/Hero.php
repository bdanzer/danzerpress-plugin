<?php
namespace Danzerpress;

use Timber;

class Hero extends Section
{
	public static $section_name = 'danzerpress-hero-section';
	public static $section_slug = 'hero';
	public $block_namespace = 'dp/hero-section';
	protected $css = [
        '.danzerpress-title' => [
			'font-size' => ['h_font_size', 'px'],
			'margin-bottom' => ['h_margin_bottom', 'px']
        ],
        '.danzerpress-section-description' => [
            'font-size' => ['d_font_size', 'px'],
        ],
        '' => [
            'background' => ['background_color'],
        ]
    ];
	protected $attributes = [
		'align' => [
			'type' => 'string',
			'default' => 'full'
		],
		'section' => [
			'type' => 'string',
			'default' => 'hero',
		],
		'hero_layout' => [
			'type' => 'number',
			'default' => 1,
		],
		'background_type' => [
			'type' => 'string',
			'default' => null,
		],
		'media' => [
			'type' => 'object',
			'default' => null
		],
		'image_side' => [
			'type' => 'string',
			'default' => 'left'
		],
		'section_image' => [
			'type' => 'string',
			'default' => 'https://picsum.photos/1920/1080'
		],
		'background_color' => [
			'type' => 'string',
			'default' => 'rgb(49, 49, 49)'
		],
		'font_color' => [
			'type' => 'string',
			'default' => 'rgb(0, 0, 0)'
		],
		'font_style' => [
			'type' => 'object',
			'default' => null
		],
		'h_font_size' => [
			'type' => 'number',
			'default' => 40
		],
		'd_font_size' => [
			'type' => 'number',
			'default' => 18
		]
	];

	public function section_setup() 
	{
		new CssBuilder(self::$section_slug, $this->get_css());
	}

	public function block_render($atts, $content) 
	{
		if (isset($atts['media'])) {
            $atts['section_background'] = $atts['media']['url'];
        }

        $section = '<div class="danzerpress-container-fw">';
        $section .= self::get_compiled_section($atts);
        $section .= '</div>';
        
        return $section;
	}
}