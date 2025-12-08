function EventIntro({ topic, desc }) {
  return (
    <div className="single-content-wrap">
      <h4 className="key-title">{topic}</h4>
      <p className="key-point-desc">{desc}</p>
    </div>
  );
}

export default EventIntro;
