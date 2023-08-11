import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className="h-24 mb-3" src={logo} alt="" />
                    <p className='mb-3'>Lorem ipsum dolor sit amet consectetur <br />
                        adipisicing elit. Quasi, enim?</p>
                    <button className="btn btn-outline border-slate-200 btn-error">Appointment</button>
                </div>
                <div>
                    <span className="footer-title">Quick Links</span>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Doctors</a>
                    <a className="link link-hover">Departments</a>
                    <a className="link link-hover">Online Payment</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">My Account</a>
                </div>
                <div>
                    <span className="footer-title">Doc House Services</span>
                    <a className="link link-hover">Pediatric Clinic</a>
                    <a className="link link-hover">Diagnosis Clinic</a>
                    <a className="link link-hover">Cardiac Clinic</a>
                    <a className="link link-hover">Laboratory Analysis</a>
                    <a className="link link-hover">Gynecological Clinic</a>
                    <a className="link link-hover">Personal Counseling</a>
                    <a className="link link-hover">Dental Clinic</a>
                </div>
                <div>
                    <span className="footer-title">Working Hours</span>
                    <a className="link link-hover">Monday-10 am to 7 pm</a>
                    <a className="link link-hover">Tuesday-10 am to 7 pm</a>
                    <a className="link link-hover">Wednesday-10 am to 7 pm</a>
                    <a className="link link-hover">Thursday-10 am to 7 pm</a>
                    <a className="link link-hover">Friday-10 am to 7 pm</a>
                    <a className="link link-hover">Saturday-10 am to 7 pm</a>
                    <a className="link link-hover">Sunday-10 am to 7 pm</a>
                </div>
            </div>
            <div>
                <div className="footer footer-center p-4 bg-base-300 text-base-content">
                    <p>Copyright © 2023 - All right reserved by Doc House Ltd</p>
                </div>
            </div>
        </footer>


    );
};

export default Footer;