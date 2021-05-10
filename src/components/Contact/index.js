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
                        <div className="col-md-6">
                            <h1 className="blue">Contact me</h1>
                            <p className="blue">Feel free to contact me by email
                            <a href="mailto:mrhumpherys@gmail.com"> here</a> or you can fill out this form. Everyone loves forms!</p>
                        </div>
                        <div className="col-md-6">
                            <form id="contact-form" className="" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="blue" htmlFor="name">Name:</label>
                                    <input type="text" className="form-control" defaultValue={name} onBlur={handleChange} name="name" />
                                </div>
                                <div className="form-group">
                                    <label className="blue" htmlFor="email">Email address:</label>
                                    <input type="email" className="form-control" defaultValue={email} onBlur={handleChange} name="email" />
                                </div>
                                <div className="form-group">
                                    <label className="blue" htmlFor="message">Message:</label>
                                    <textarea name="message" className="form-control" defaultValue={message} onBlur={handleChange} rows="5"  />
                                </div>
                                {errorMessage && (
                                    <div>
                                        <p className="error-text blue">{errorMessage}</p>
                                    </div>
                                )}
                                <button className="btn mybtn" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                
          </div>
        </div>
        </div>
      )
}

export default ContactForm;