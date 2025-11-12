import { Link, useLocation } from "react-router-dom";
import image_logo from "../assets/image_logo.JPG"
import { isAuthenticated, getUsername, clearJWT } from "./auth/auth-helper";

function Layout() {

    const location = useLocation();

    const signoutClick = ()=>{
        clearJWT();
    }

    return (
        <div>
            <h1>My Portfolio Website</h1>
            <nav className="navbar">
                <img src={image_logo} alt="Logo"className="logo"/>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/services">Services</Link>
                <Link to="/inventory/list">Inventory List</Link>
                <div>
                    {!isAuthenticated() && 
                        <Link to="/users/signin">Signin</Link>
                    }
                    {isAuthenticated() && 
                        <Link to="/" onClick={signoutClick}>Sign-out ({getUsername()})</Link>
                    }
                </div>
            </nav>
            <br />
            <hr />
        </div>
    )
}

export default Layout;