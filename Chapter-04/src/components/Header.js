import { useState } from "react";

const Title = () => {
    return (
        <a href='/'>
            <img src='https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4' alt='Logo'
            className="logo"
             />
        </a>
    )
}



const Header = () => {

    // console.log("render()")
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <div className='head'>
            <Title/>
            
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>
                        {
                            isLoggedIn ? (<button onClick={() => setIsLoggedIn(false)}>Logout</button>) : (<button onClick={()=> setIsLoggedIn(true)}>Login</button>)
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;  