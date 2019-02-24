<?php
namespace Danzerpress;

use Danzerpress\Section;
use Danzerpress\Sections;
use Timber;

class Text extends Section
{
	public static $section_name = 'danzerpress-block-text-section';
	public static $section_slug = 'text';

	public function section_setup()
	{
		add_filter('dp_acf_layout_text_sub_fields', [$this, 'get_text'], 10, 1 );
	}

	/**
	 * Change Text Section to use wysiwyg
	 */
	public function get_text($fields) 
	{
		//wysiwyg
		foreach($fields as $key => $field) {
			if ($field['key'] !== 'dp_section_description')
				continue;

			$fields[$key]['type'] = 'wysiwyg';
		}

		return $fields;
	}
}