export default function DanzerPressSection( props )
{
    const media = (props.props.attributes.media) ? props.props.attributes.media.url : '';
    return (
        <div className={ 'danzerpress-section ' + props.className } style={props.style}>
            <div className="danzerpress-wrap">
                <img className="danzerpress-parallax" src={media}/>
                { props.children }
            </div>
        </div>
    );
};