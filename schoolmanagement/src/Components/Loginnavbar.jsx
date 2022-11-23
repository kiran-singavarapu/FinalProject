import React, { useState} from "react"
import {Link, Navigate} from "react-router-dom"
import logo from './logo.jpg'

function Loginnavbar()
{
//   let navigate = useNavigate();
//   useEffect(() => {

//     let isAuth = JSON.parse(localStorage.getItem('token'));

//     if(isAuth && isAuth !== null) {

//         navigate("/");

//         window.location.reload();

//     }

// }, []);  
    
    return(
      <>
          <div>
              <nav className="navbar navbar-expand-lg bg-warning">
                <img src={logo} style={{"height":"60px","width":"70px"}}/>
      <div className="container-fluid">
        <h3 >  School Management </h3>
                
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-3">
            <li className="nav-item">
              <Link className="nav-link active h5 text-primary" to="/adminlogin">
                <button className="btn btn-danger">Login</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active h5 text-primary" to="/gallery">
              <button className="btn btn-danger">School Gallery</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active h5 text-primary" to="/contactUs">
              <button className="btn btn-danger">Contact Us</button>
              </Link>
            </li>
          </ul>
          </div>
          </div>
      </nav>
      
      </div>
      </>

  
    
    )
}

export default Loginnavbar;