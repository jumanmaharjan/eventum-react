import React, { useState } from "react";

function HomeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function Validation() {
    const err = {};

    if (!formData.name.trim()) {
      err.name = "Name is required";
    }
    if (!formData.email.trim()) {
      err.email = "Email is required";
    }
    if (!formData.message.trim()) {
      err.message = "Message is required";
    }

    return err;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let validate = Validation();

    if (Object.keys(validate).length > 0) {
      setError(validate);
    } else {
      setError({});
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");

      setFormData({ name: "", email: "", message: "" });
    }
  }

  return (
    <>
      <form className="contact-from" onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name.."
          />
          {error.name && <span className="alert">{error.name}</span>}
        </p>

        <p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email.."
          />
          {error.email && <span className="alert">{error.email}</span>}
        </p>

        <p>
          <textarea
            rows="7"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Your Message.."
          />
          {error.message && <span className="alert">{error.message}</span>}
        </p>

        <p>
          <input type="submit" name="submit" value="SEND MESSAGE" />
        </p>
      </form>
    </>
  );
}

export default HomeForm;
