"use client";
import { useSubmitFormMutation } from "@/features/submitcontact";
import React from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [submitForm] = useSubmitFormMutation();

  const handleForm = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value.trim(),
      email: event.target.email.value.trim(),
      phone: event.target.phone.value.trim(),
      message: event.target.comments.value.trim(),
    };

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    try {
      await submitForm(formData).unwrap();
      toast.success("Thanks For Your Message");
      event.target.reset();
    } catch (error) {
      toast.error("Failed to send the message. Please try again later.");
    }
  };

  return (
    <>
      <div className="contact-form-style-one">
        <h4 className="sub-title">Have Questions?</h4>
        <h2 className="title">Send us a Message</h2>
        <form className="contact-form" onSubmit={handleForm}>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  autoComplete="off"
                  required
                  pattern="[A-Za-z\s]+" // Allows only letters and spaces
                  title="Please enter a valid name"
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  type="email"
                  autoComplete="off"
                  required
                />
                <span className="alert-error"></span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  className="form-control no-arrows"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  type="number"
                  autoComplete="off"
                  required
                  pattern="^\d{10,15}$" // Allows 10 to 15 digits
                  title="Please enter a valid phone number"
                />
                <span className="alert-error"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group comments">
                <textarea
                  className="form-control"
                  id="comments"
                  name="comments"
                  placeholder="Tell Us About Project *"
                  autoComplete="off"
                  rows={8}
                  required
                  minLength={10} // Requires at least 10 characters
                  title="Please enter a message with at least 10 characters"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <button type="submit" name="submit" id="submit">
                <i className="fa fa-paper-plane"></i> Get in Touch
              </button>
            </div>
          </div>
          <div className="col-lg-12 alert-notification">
            <div id="message" className="alert-msg"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
