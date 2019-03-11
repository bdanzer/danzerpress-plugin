import Inspector from './inspector.js';
import DanzerPressSection from '../../../components/danzerpress-section.js';
import DanzerPressContent from '../../../components/danzerpress-content.js';

const { Component } = wp.element

class Edit extends Component
{
    toRGB(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }  

	render() {
        const { isSelected, className, setAttributes } = this.props;
        const { section_title, section_description, hero_layout, background_type, media, image_side, section_image, section, background_color, background_gradient_a, font_color, font_style, h_font_size, d_font_size, section_padding } = this.props.attributes;
 
        return [
            (
                <Inspector 
                    {...this.props}
                />
            ),
            (
                <DanzerPressSection
                    className="admin-hero-section"
                    props={this.props}
                    style={{
                        'background': background_color,
                        padding: section_padding,
                        background: 'transparent'
                    }}>
                    <div className="danzerpress-col-1 danzerpress-align-center danzerpress-hero-normal">
                        {/* {% include 'dp-sections/section-parts/section_icon.twig' %} */}
                        <div className="danzerpress-section-content {{layout.text_align}}">
                            <DanzerPressContent 
                                props={this.props}
                                attributes={this.props.attributes}>
                            </DanzerPressContent>
                            {/* <DanzerPressButton></DanzerPressButton> */}
                            {/* {% include 'dp-sections/section-parts/content-buttons.twig' %} */}
                        </div>
                    </div>
                </DanzerPressSection>
            )
        ]
    }
}

export default Edit;