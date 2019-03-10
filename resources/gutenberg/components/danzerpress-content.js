const {
	RichText
} = wp.editor.InspectorControls ? wp.editor : wp.blocks

export default function DanzerPressContent({ props, attributes })
{
	return [
		<RichText
			style={{
				color: attributes.font_color,
				fontSize: attributes.h_font_size + 'px'
			}}
			tagName={'h2'}
			className={`${props.className} danzerpress-title`}
			onChange={(content) => { props.setAttributes({section_title: content})} }
			value={attributes.section_title}
			placeholder="Section Title"
			keepPlaceholderOnFocus
		/>,
		<RichText
            tagName={'p'}
			style={{
				color: attributes.font_color,
				fontSize: attributes.d_font_size + 'px'
			}}
			className={`${attributes.className} danzerpress-section-description`} 
			onChange={(content) => { props.setAttributes({section_description: content})} } 
			value={attributes.section_description}
			placeholder="Second Description"
			keepPlaceholderOnFocus
		/> 
	];
};