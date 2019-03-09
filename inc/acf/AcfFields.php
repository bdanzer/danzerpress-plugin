<?php
namespace Danzerpress\acf;

class AcfFields {
    public function __construct()
    {
        add_filter('dp_prepend_global_acf_fields', [$this, 'prepend_global_acf_fields'], 10, 1);
        add_filter('dp_global_acf_fields', [$this, 'global_acf_fields'], 10, 1);
    }

    public function prepend_global_acf_fields($fields)
    {
        $unvalid_fields = [
            [
                'key' => 'dp_custom_css_class',
                'label' => 'Custom CSS Class',
                'name' => 'custom_css_class',
                'prefix' => 'acf',
                'type' => 'text',
                'value' => null,
                'menu_order' => 0,
                'instructions' => 'This is not required, this is just for people who want to add more specific CSS styling.',
                'required' => 0,
                'id' => '',
                'class' => '',
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ],
                'default_value' => '', 
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ]
        ];
        
        return array_merge($unvalid_fields, $fields);
    }

    public function global_acf_fields($fields) 
    {
        $unvalid_fields = [
            [
                'key' => 'dp_section_title',
                'label' => 'Title',
                'name' => 'section_title',
                'prefix' => 'acf',
                'type' => 'text',
                'value' => null,
                'instructions' => '',
                'required' => 0,
                'id' => '',
                'class' => '',
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ],
                'default_value' => 'Lorem Ipsum',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
                'maxlength' => '',
            ],
            [
                'key' => 'dp_section_description',
                'label' => 'Description',
                'name' => 'section_description',
                'prefix' => 'acf',
                'type' => 'textarea',
                'value' => null,
                'instructions' => '',
                'required' => 0,
                'id' => '',
                'class' => '',
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ],
                'default_value' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis erat eget nunc eleifend pretium. Cras quis malesuada erat.',
                'placeholder' => '',
                'maxlength' => '',
                'rows' => '',
                'new_lines' => '',
            ],
            [
                'key' =>  'dp_button_text_left',
                'label' =>  'Button Text Left', 
                'name' =>  'button_text_left',
                'prefix' =>  'acf' ,
                'type' =>  'text',
                'value' => null,
                'instructions' =>  '',
                'required' => 0,
                'id' =>  '' ,
                'class' =>  '' ,
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' =>  '',
                    'class' =>  '' ,
                    'id' =>  '' ,
                ],
                'default_value' =>  '',
                'placeholder' =>  '',
                'prepend' =>  '',
                'append' =>  '',
                'maxlength' =>  ''
            ],
            [
                'key' =>  'dp_button_text_right',
                'label' =>  'Button Text Right', 
                'name' =>  'button_text_right',
                'prefix' =>  'acf' ,
                'type' =>  'text',
                'value' => null,
                'instructions' =>  '',
                'required' => 0,
                'id' =>  '' ,
                'class' =>  '' ,
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' =>  '',
                    'class' =>  '' ,
                    'id' =>  '' ,
                ],
                'default_value' =>  '',
                'placeholder' =>  '',
                'prepend' =>  '',
                'append' =>  '',
                'maxlength' =>  ''
            ], 
            [
                'key' => 'dp_button_link_left',
                'label' => 'Button Link Left',
                'name' => 'button_link_left',
                'prefix' => 'acf',
                'type' => 'url',
                'value' => null,
                'instructions' => '' ,
                'required' => 0,
                'id' => '' ,
                'class' => '' ,
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ],
                'default_value' => '',
                'placeholder' => '',
            ],
            [
                'key' => 'dp_button_link_right',
                'label' => 'Button Link Right',
                'name' => 'button_link_right',
                'prefix' => 'acf',
                'type' => 'url',
                'value' => null,
                'instructions' => '',
                'required' => 0,
                'id' => '',
                'class' => '',
                'conditional_logic' => 0,
                'wrapper' => [
                    'width' => '',
                    'class' => '', 
                    'id' => '', 
                ],
                'default_value' => '',
                'placeholder' => '',
            ]
        ];

        return array_merge($unvalid_fields, $fields);
    }
}