import Inspector from './inspector.js';
import DanzerPressSection from '../../../components/danzerpress-section.js';
import DanzerPressContent from '../../../components/danzerpress-content.js';
import toRGB from '../utils/rgbConverter';
import template from "../../../../templates/dp-sections/hero.twig";
import ReactHtmlParser from 'react-html-parser';

var parser = new DOMParser()

const { Component } = wp.element

class Edit extends Component
{ 
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
                // <div>{ ReactHtmlParser(template({layout: this.props.attributes})) }</div>
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