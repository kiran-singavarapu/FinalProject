import React from "react"
import {Link} from "react-router-dom"
import "../styles.css"
function Adminnavbar()
{
    return(
        <div>
             <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">            
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/addstudents">
                <button className="btn btn-primary">ADD STUDENTS</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/addteachers">
              <button className="btn btn-primary">ADD TEACHER</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/">
              <button className="btn btn-danger">LOGOUT</button>
              </Link>
            </li>
         
          </ul>
          </div>
          </div>
      </nav>

        </div>
    )
} 

export default Adminnavbar;