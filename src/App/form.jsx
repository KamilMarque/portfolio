import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Sass/contact.scss'
import { Button } from '../ui/Button';

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState([])

    function sendEmail(e) {
      e.preventDefault();
      setLoading(true);
      emailjs.sendForm('service_enik4xw', 'template_duzoe6j', e.target, 'user_D7V0mqc1AxCFcQRqmxYco')
        .then((result) => {
          setMessage([{text: 'Mail bien envoyé !'}, {class: 'succesMessage'}])
            document.querySelectorAll('input').forEach((input) => {
              input.value = '';
            })
            document.querySelector('textarea').value = '';
            setLoading(false);
        }, (error) => {
            setMessage("Error, l'email n'a pas pu etre envoyer ! Merci de contacter 'kamil.marque@gmail.com'", 'errorMessage')
            setLoading(false);
        });
    }

    function Loading () {
      return (
        <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="40px" height="40px" viewBox="0 0 40 40" enableBackground="new 0 0 40 40" xmlSpace="preserve">
          <path opacity="0.2" fill="#FFF" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
            s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
            c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
          <path fill="#FFF" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
            C22.32,8.481,24.301,9.057,26.013,10.047z">
            <animateTransform attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 20 20"
              to="360 20 20"
              dur="0.5s"
              repeatCount="indefinite"/>
            </path>
          </svg>
      )
    }
  
    return (<div className="form">

        <h2>Me contacter</h2>
        
        <form className="contact-form" onSubmit={sendEmail}>
        {message[0] ? <span className={message[1].class}>{message[0].text}</span> : null}
          <div className="formGroup">
            <label htmlFor="user_name">Name</label>
            <input type="text" name="user_name" id="user_name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="user_email">Email</label>
            <input type="email" name="user_email" id="user_email" required />
          </div>
          <div className="formGroup large">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required />
          </div>
          <div className="terms">
            <div>
              <label htmlFor="checkbox">J'utilise ces données pour vous contacter, et c’est tout !  Si vous êtes d’accord, cochez cette case.</label>
              <input type="checkbox" id="checkbox" required />
            </div>
            <Button type="submit">{loading ? <Loading /> : 'ENVOYER'}</Button>
          </div>
          
        </form>
      </div>
    );
  }