import React, { useState } from "react";
import "./contact_form.css";
import database from "../../service/firebase";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";

const ContactForm = () => {
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    const collectionRef = collection(database, "contacts");
    const payload = {
      fName,
      email,
      phone,
      message,
      timestamp: serverTimestamp(),
    };
    addDoc(collectionRef, payload)
      .then(() => {
        alert("Message has been submitted! Thanks.");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
      });
    setFName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="contact_form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full name"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="phone"
          placeholder="Phone (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          placeholder="Message"
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button
          className="contactSubmit"
          style={{ visibility: loader ? "hidden" : "visible" }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
