import React from "react"
import Nav from "../components/nav"
import emailjs from "emailjs-com"

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_ugu3ijl",
        "template_kjrwoei",
        e.target,
        "user_7Unp1uMVD42FW9C6VdL7l"
      )
      .then(res => {
        console.log(res)
      })
      .catch(error => console.log(error))
  }
  return (
    <>
      <div><Nav /></div>
      <br />
      <div>
        <h1 className="heading">Contact Form</h1>

        <div className="container">
          <form className="row" onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Your name.."
            />

            <br />
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className="form-control"
              placeholder="Your mobile number.."
            />

            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Your Email Address.."
            />
            <br />
            <br />
            <label htmlFor="subject">Message</label>
            <textarea
              id="message"
              name="message"
              rows="8"
              className="form-control"
              placeholder="Your message .."
            ></textarea>

            <input
              type="submit"
              value="Submit"
              className="form-control btn btn-primary"
              style={{ marginTop: "30px" }}
            />
          </form>
        </div>
      </div>
    </>
  )
}
