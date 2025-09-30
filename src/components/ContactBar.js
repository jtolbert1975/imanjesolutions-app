import 'bootstrap-icons/font/bootstrap-icons.css';
import './ContactBar.css';
import NavBarMobile from './NavBarMobile';

function ContactBar() {
    return (
        <div className="contact-bar">
            <div className="phone-info">
                <a href="tel:+14702612528">
                    <i className="bi bi-telephone-fill"></i>
                    <span className='phone-number'>(470) 261 - 2528</span>
                </a>
            </div>
            <div className='email-info'>
                <a href="mailto:info@imanjesolutions.com">
                    <i className="bi bi-envelope-fill"></i>
                    <span className='email-address'>info@imanjesolutions.com</span>
                </a>
            </div>
            <NavBarMobile />
        </div>
    );
}

export default ContactBar;
