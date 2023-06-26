import { useState } from "react";
import Logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <img src={Logo} alt="Logo" className="h-28 p-2" />
    </Link>
  );
};

const Header = () => {
  // console.log("render()")
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg ">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="py-2 px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="py-2 px-2">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="py-2 px-2">Contact</li>
          </Link>
          <li className="py-2 px-2">Cart</li>
          <li className="py-2 px-2">
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
