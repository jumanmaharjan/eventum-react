function EventDetails({ details }) {
  return (
    <div className="single-content-wrap">
      <h5 className="key-title">PRESENTATION DETAILS :</h5>
      {details.map((detail, i) => {
        return (
          <p className="key-point-desc" key={i}>
            {detail}
          </p>
        );
      })}
    </div>
  );
}

export default EventDetails;
