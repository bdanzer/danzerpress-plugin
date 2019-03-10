import './editor.scss';
import Edit from './component/edit.js';

const { __ } = wp.i18n

// Required components
const { registerBlockType } = wp.blocks

registerBlockType(
    'dp/hero-section', // Name of the block with a required name space
    {
	    title: __('Danzerpress Hero Section'), // Title, displayed in the editor
	    icon: (<img src="https://dev.danzerpress.com/wp-content/uploads/2019/02/danzerpressofficial.png"/>), // Icon, from WP icons
        category: 'danzerpress', // Block category, where the block will be added in the editor
        supports: {
            align: true
        },
    
        edit: Edit,
 
        save ( props ) {
            return null // See PHP side. This block is rendered on PHP.
        },
    } 
);