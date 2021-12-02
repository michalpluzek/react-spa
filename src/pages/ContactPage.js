import React, { useState } from "react";
import "../styles/ContactPage.css";

const ContactPage = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <h3>Napisz do nas</h3>
        <textarea
          value={value}
          onChange={handleChange}
          placeholder="Wpisz wiadomość..."
        ></textarea>
        <button>Wyślij</button>
      </form>
    </div>
  );
};

export default ContactPage;
