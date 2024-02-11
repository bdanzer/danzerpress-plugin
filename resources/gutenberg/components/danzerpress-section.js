export default function DanzerPressSection(props) {
  const media = props.props.attributes.media
    ? props.props.attributes.media.url
    : "";
  return (
    <section
      className={"danzerpress-section " + props.className}
      style={props.style}
    >
      <div className="danzerpress-wrap">
        {media && <img className="danzerpress-parallax" src={media} />}
        {props.children}
      </div>
    </section>
  );
}
