function IconGenerator(props) {
  return (
    <a href={props.link} target="_blank">
      <img className="icon" src={props.src} />
    </a>
  );
}

function CustomButton(props) {
  return (
    <a href={props.link} target="_blank">
      <button className={props.style}>
        <img className="imgpad" src={props.img} />
        {props.name}
      </button>
    </a>
  );
}

function AboutGenerator(props) {
  return (
    <div>
      <h3 className="heading">{props.heading}</h3>
      <p className="text">{props.text}</p>
    </div>
  );
}

export { IconGenerator, CustomButton, AboutGenerator };
