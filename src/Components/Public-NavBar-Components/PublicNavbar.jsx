import { Link } from "react-router-dom";
import Logo from '../../../Assets/Logo.png'

export default function PublicNavbar() {
  return (
    <nav className="flex justify-between p-3 shadow bg-white fixed w-full z-50 top-7">
      <Link to="/" className="w-25 sm:w-35 md:w-40 xl:45 my-auto"><img src={Logo} alt="Glamstar Beauty World" /></Link>
      <div className="flex gap-4  font-inter">
        <Link to="/Login" className="text-sm sm:text-base bg-blue-800 text-white px-3 py-1 rounded">Sign In</Link>
        <Link to="/Register" className="text-sm sm:text-base font-semibold bg-red-800 text-white px-3 py-1 rounded">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
