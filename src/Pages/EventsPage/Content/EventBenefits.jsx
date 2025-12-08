function EventBenefits({ benefits }) {
  const mid = Math.ceil(benefits.length / 2);
  const benefitsplit = [benefits.slice(0, mid), benefits.slice(mid)];
  return (
    <div className="single-content-wrap single-content-list">
      <h5 className="key-title">BENEFITS OF SESSION :</h5>
      <p>Voluptate purus dictum habitasse bibendum metus...</p>

      <div className="key-point-list">
        <div className="row">
          {benefitsplit.map((col, i) => (
            <div className="col-sm-6" key={i}>
              <div className="item-list">
                <ul>
                  {col.map((item, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventBenefits;
