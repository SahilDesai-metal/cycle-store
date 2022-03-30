import './index.css';
import addressFont from './../../assets/font-images/font-address.svg';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="website-logo">
                <img src={addressFont} alt="brand" />
            </div>
            <div className="contact-card">
                <img
                    className="contact-card-image"
                    src={addressFont}
                    alt="Address"
                />
                <h6 className="contact-card-header">Address</h6>
                <p>CycleStore Ltd <br /> Nr. Moon Complex <br /> Malad-West, Mumbai, Maharashtra</p>
            </div>
            <div>
                <ul className="footerNavigator">
                    <li><Link to="/"><button>Explore</button></Link></li>
                    <li><Link to="/Services"><button>Services</button></Link></li>
                    <li><Link to="/Contacts"><button>Contacts</button></Link></li>
                </ul>
            </div>
        </div>
    );
}