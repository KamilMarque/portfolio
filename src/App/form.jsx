import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_enik4xw', 'template_duzoe6j', e.target, 'user_D7V0mqc1AxCFcQRqmxYco')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  
    return (
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
  }