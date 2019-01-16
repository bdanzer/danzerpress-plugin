<?php
namespace Danzerpress;

use Timber;

class CssBuilder
{
    protected $section_number;
    protected $css_array;

    public function __construct($parent_selector, array $css) 
    {
        $this->css_array = $css;
        add_action('wp_head', [$this, 'render_css']);
    }

    public function render_css() 
    {
        if (!get_the_ID() || is_admin() || wp_doing_ajax()) {
            return;
        }

        $post = get_post(get_the_ID());
        $content = $post->post_content;

        if (!has_blocks($content))
            return;

        $blocks = parse_blocks($content);
        
        $css = [];
        $string = '';
        $this->section_number = 0;
        foreach ($blocks as $block) {
            $this->section_number++;
            $section_number = "#section-{$this->section_number} ";

            foreach ($this->css_array as $parent_selector => $properties) {
                foreach($properties as $key => $value) {
                    $append = (isset($value[1])) ? $value[1] : '';
                    if (isset($block['attrs'][$value[0]])) {
                        $string .= $section_number . $parent_selector . "{" . $key . ':' . $block['attrs'][$value[0]] . $append . ";}";
                    } 
                }
            }
        }

        echo '<style>' . $string . '</style>';
    }
}