import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar fixed  z-10 bg-opacity-30 px-24 bg-black text-white">
            <div className="flex-1">
               <img className="h-16 ml-12" src={logo} alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/appointment'>Appointment</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;