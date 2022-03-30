import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { Footer } from '../PageFooter/index';

import contactLogo from './../../assets/images/contact us.jpg';
import callusFont from './../../assets/font-images/font-contact.svg';
import addressFont from './../../assets/font-images/font-address.svg';
import emailFont from './../../assets/font-images/font-email.svg';
import './index.css';

export const Contacts = () => {
    return (
        <div className="contacts-container">
            <div className="contacts-header">
                <img
                    alt="contacts background"
                    className="background"
                    src={contactLogo}
                />
                <div className="header">
                    Contact Us
                </div>
            </div>
            <ContactInformationSection />
            <ContactForm />
            <Footer />
        </div>
    );
}

const ContactForm = () => {
    return (
        <div className="form-section">
            <div className="form-header">
                SEND US A MESSAGE
            </div>
            <div className="form-container">
                <div className="row">
                    <input
                        type="text"
                        placeholder="Name"
                        className="form-inputs"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="form-inputs"
                    />
                </div>
                <div className="row">
                    <input
                        type="number"
                        placeholder="Mobile No."
                        className="form-inputs"
                    />

                    <input
                        type="text"
                        placeholder="Query for"
                        className="form-inputs"
                    />
                </div>
                <textarea className="form-query" placeholder="Query">
                </textarea>
                <button className="form-submit-button">
                    Submit
                </button>
            </div>
        </div>
    );
}

const ContactInformationSection = () => {
    return (
        <div className="contact-section">
            <div className="contact-card">
                <img
                    alt="contact-phone"
                    className="contact-card-image"
                    src={callusFont}
                />
                <h6 className="contact-card-header">Call Us</h6>
                <p className="contact-text">+919191910000</p>
            </div>
            <div className="contact-card">
                <img
                    alt="address"
                    className="contact-card-image"
                    src={addressFont}
                />
                <h6 className="contact-card-header">Address</h6>
                <p>CycleStore Ltd <br /> Nr. Moon Complex <br /> Malad-West, Mumbai, Maharashtra</p>
            </div>
            <div className="contact-card">
                <img
                    alt="email font"
                    className="contact-card-image"
                    src={emailFont}
                />
                <h6 className="contact-card-header">Email Us</h6>
                <p>support@cyclestore.com</p>
            </div>
        </div>
    );
}