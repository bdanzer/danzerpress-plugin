<?php
namespace Danzerpress;

use Danzerpress\Section;
use Timber;

class Code extends Section
{
	public static $section_name = 'raw-code-section';
	public static $section_slug = 'code';

	public function section_setup()
	{
		add_filter('dp_acf_layout_code_sub_fields', [$this, 'get_code'], 10, 1 );
	}

	/**
	 * Change Code Section to use Raw Code over description
	 */
	public function get_code($fields) 
	{
		foreach($fields as $key => $field) {
			if ($field['key'] !== 'dp_section_description')
				continue;

			//raw_code
			$fields[$key]['label'] = 'Raw Code';
			$fields[$key]['name'] = 'raw_code';
			$fields[$key]['_name'] = 'raw_code';
		}

		return $fields;
	}
}