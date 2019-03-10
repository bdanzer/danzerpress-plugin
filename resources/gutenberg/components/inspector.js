/**
 * WordPress dependencies
 */
const { __ } = wp.i18n

const {
	RangeControl,
	SelectControl,
	PanelBody,
	Button,
	IconButton,
	Toolbar
} = wp.components

const {
	InspectorControls,
	RichText,
	MediaUpload,
	BlockControls
} = wp.editor.InspectorControls ? wp.editor : wp.blocks

// const DanzerPressGeneralSettings = ({ props }) => {
// 	return (
// 		<PanelBody title={ __( 'General Settings' ) }>
// 			<RangeControl
// 				label="Section Padding"
// 				value={ props.attributes.section_padding }
// 				onChange={ ( new_section_padding ) => props.setAttributes( { section_padding: new_section_padding } ) }
// 				min={ 22 }
// 				max={ 140 }
// 			/>
// 			<SelectControl
// 					label={ __( 'Layout' ) }
// 					value={ hero_layout }
// 					options={ hero_layouts }
// 					onChange={ ( newLayout ) => { setAttributes( { hero_layout: newLayout } ) } }
// 				/>
// 			<SelectControl
// 				label={ __( 'Background Type' ) }
// 				value={ background_type }
// 				options={ background_types }
// 				onChange={ ( newType ) => { 
// 					setAttributes( { background_type: newType } ) 
// 				} }
// 			/>
// 		</PanelBody>
// 	);
// }

/**
 * Inspector controls
 */
class Inspector extends Component 
{
	constructor( props ) {
		super( ...arguments );
	}

	render() {

		console.log(this.props);

		const { isSelected, className, setAttributes } = this.props;
        const { section_title, section_description, hero_layout, background_type, media, image_side, section_image, section, background_color, background_gradient_a, font_color, font_style, h_font_size, d_font_size, section_padding } = this.props.attributes;

		return (
			<BlockControls key='controls'>
				{ media && background_type == 'image' && (
					<Toolbar>
						<MediaUpload
							onSelect={ ( media ) => setAttributes( { media: media } ) }
							type="image"
							value={ media.url }
							render={ ( { open } ) => (
								<IconButton
									className="components-toolbar__control"
									label={ __( 'Edit image' ) }
									icon="edit"
									onClick={ open }
								/>
							) }
						/>
					</Toolbar>
				)}
			</BlockControls>
		),
		(
			<InspectorControls key={ 'inspector' }>
				<PanelBody title={ __( 'General Settings' ) }>
					<RangeControl
						label="Section Padding"
						value={ section_padding }
						onChange={ ( new_section_padding ) => setAttributes( { section_padding: new_section_padding } ) }
						min={ 22 }
						max={ 140 }
					/>
					<SelectControl
							label={ __( 'Layout' ) }
							value={ hero_layout }
							options={ hero_layouts }
							onChange={ ( newLayout ) => { setAttributes( { hero_layout: newLayout } ) } }
						/>
					<SelectControl
						label={ __( 'Background Type' ) }
						value={ background_type }
						options={ background_types }
						onChange={ ( newType ) => { 
							setAttributes( { background_type: newType } ) 
						} }
					/>
				</PanelBody>
				{(hero_layout != 1) ? (
					<PanelBody>
						<SelectControl
							label={ __( 'Content Side' ) }
							value={ image_side }
							options={ image_sides }
							onChange={ ( newSide ) => { setAttributes( { image_side: newSide } ) } }
						/>
					</PanelBody>
				) : ''}
				
				<PanelBody>
					<MediaUpload
						onSelect={ ( newMedia ) => setAttributes( { media: newMedia, section_image: newMedia.url } ) }
						type={'image'}
						value={media}
						render={ ( {open} ) => (
							<div>
								{!section_image && (
									<Button
										className="components-button editor-post-featured-image__toggle"
										onClick={ open }
									>
										Upload Image
									</Button>
								)}

								{section_image && sectionUrl(open)}
							</div>
						)}
					/>
				</PanelBody>

				<PanelColorSettings
					title={ __( 'DanzerPress Hero Colors' ) }
					initialOpen={ false }
					colorSettings={[
						{
							label: __( 'Background Color' ),
							value: background_color,
							onChange: ( value ) => {
								setAttributes( { background_color: value } )
							},
						},
						{
							label: __( 'Font Color' ),
							value: font_color,
							onChange: ( value ) => {
								setAttributes( { font_color: value } )
							},
						},
					]}
				/>

				<PanelBody title={__('Font Settings')}>
					<RangeControl
						label="Header Font Size"
						value={ h_font_size }
						onChange={ ( new_font_size ) => setAttributes( { h_font_size: new_font_size } ) }
						min={ 22 }
						max={ 80 }
					/>
					<RangeControl
						label="Description Font Size"
						value={ d_font_size }
						onChange={ ( new_font_size ) => setAttributes( { d_font_size: new_font_size } ) }
						min={ 8 }
						max={ 40 }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
};

export default Inspector;