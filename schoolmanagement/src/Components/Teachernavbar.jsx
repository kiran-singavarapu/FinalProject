import React from "react"
import {Link} from "react-router-dom"
function Teachernavbar()
{
    return(
        <div>
             <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">            
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/addstudentmarks">
                <button className="btn btn-primary">Add Student marks</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/addstudentdetails">
               <button className="btn btn-primary"> Add Student Attendence</button>
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

export default Teachernavbar;