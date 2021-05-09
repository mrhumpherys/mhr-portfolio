import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        
    }
    
    const handleSubmit= (e) => {
        e.preventDefault();
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
        console.log("form", formState);
    }

    return (
        <div className="row justify-content-center m-4">
            <div className="col-md-8">
        <div className="d-flex">
          <div className="row justify-content-center mr-1">
              <div className="col-md-9">
                <h1>Contact me</h1>
                <p>Feel free to contact me by email
                 <a href="mailto:mrhumpherys@gmail.com"> here</a> or you can fill out this form. Everyone loves forms!</p>
              </div>
          </div>
          <form id="contact-form" className="" onSubmit={handleSubmit}>
            <div className="">
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div className="">
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button className="btn" type="submit">Submit</button>
          </form>
          </div>
        </div>
        </div>
      )
}

export default ContactForm;