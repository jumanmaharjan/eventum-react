function EventImage(props) {
  return (
    <figure className="event-feature-image figure-round-border">
      <img src={`/assets/img/${props.img}`} alt="" />
    </figure>
  );
}

export default EventImage;
