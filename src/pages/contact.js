import React from "react"
import Nav from "../components/nav";

export default function Contact() {
    return (
    <>
        <div> <Nav /> </div>        
        <br />
        <h1>Contact Form</h1>

        <div class="container">
        <form action="/">
            <label htmlFor="name">Name</label>
            <input type="text" id="fname" name="name" placeholder="Your name.." />

            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" name="email" placeholder="Your Email Address.." />

            <br />
            <br />
            <label htmlFor="subject">Message</label>
            <textarea id="subject" name="subject" rows="8" placeholder="Write something.."></textarea>

            <input type="submit" value="Submit" />             
        </form>
        </div>
    </>
    )  
}