import React, { useState } from "react";

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    confirmEmail: "",
    phone: "",
    cardName: "",
    cardNumber: "",
    expireMonth: "",
    expireYear: "",
    ccv: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    postalCode: "",
    additionalInfo: "",
    acceptedTerms: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle checkbox change for terms and conditions
  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      acceptedTerms: e.target.checked,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Here you can add form submission logic, e.g., an API call
  };

  return (
    <div className="booking-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 right-sidebar">
            <div className="booking-form-wrap">
              <form onSubmit={handleSubmit}>
                <div className="booking-content">
                  <div className="form-title">
                    <span>1</span>
                    <h4>Your Details</h4>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>First name*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstname"
                          value={formData.firstname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Last name*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Email*</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Confirm Email*</label>
                        <input
                          type="email"
                          className="form-control"
                          name="confirmEmail"
                          value={formData.confirmEmail}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Phone*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="booking-content">
                  <div className="form-title">
                    <span>2</span>
                    <h4>Payment Information</h4>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label>Name on card*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Card number*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Expiration date*</label>
                        <div className="row">
                          <div className="col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              name="expireMonth"
                              value={formData.expireMonth}
                              onChange={handleChange}
                              placeholder="MM"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              name="expireYear"
                              value={formData.expireYear}
                              onChange={handleChange}
                              placeholder="YYYY"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Security code*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="ccv"
                          value={formData.ccv}
                          onChange={handleChange}
                          placeholder="CCV"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="booking-content">
                  <div className="form-title">
                    <span>3</span>
                    <h4>Billing Address</h4>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Country*</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select your country</option>
                          <option value="Europe">Europe</option>
                          <option value="United states">United states</option>
                          <option value="Asia">Asia</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Street line 1*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="street1"
                          value={formData.street1}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Street line 2</label>
                        <input
                          type="text"
                          className="form-control"
                          name="street2"
                          value={formData.street2}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>City*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>State*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Postal code*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Additional Information</label>
                        <textarea
                          rows="6"
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          placeholder="Notes about your order, e.g. special notes for delivery"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-policy">
                  <h3>Cancellation policy</h3>
                  <div className="form-group">
                    <label className="checkbox-list">
                      <input
                        type="checkbox"
                        name="acceptedTerms"
                        value={formData.acceptedTerms}
                        onClick={handleCheckboxChange}
                      />
                      <span className="custom-checkbox"></span>I accept terms
                      and conditions and general policy.
                    </label>
                  </div>
                  <button type="submit" className="button-round-primary">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Price Table Summary */}
          <div className="col-lg-4">
            <div className="price-table-summary">
              <h4 className="bg-title">Summary</h4>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Packages cost</strong>
                    </td>
                    <td className="text-right">$500</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Dedicated tour guide</strong>
                    </td>
                    <td className="text-right">$60</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Insurance</strong>
                    </td>
                    <td className="text-right">$40</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Tax</strong>
                    </td>
                    <td className="text-right">13%</td>
                  </tr>
                  <tr className="total">
                    <td>
                      <strong>Total cost</strong>
                    </td>
                    <td className="text-right">
                      <strong>$580</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="widget-bg widget-support-wrap">
              <div className="icon">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="support-content">
                <h5>HELP AND SUPPORT</h5>
                <a href="telto:12345678" className="phone">
                  +55 123 987 00
                </a>
                <small>Monday to Friday 9.00am - 7.30pm</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
