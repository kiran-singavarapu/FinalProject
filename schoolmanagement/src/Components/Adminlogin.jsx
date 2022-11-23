import React, { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Loginnavbar from "./Loginnavbar"

function Adminlogin()
{

    const navigate=useNavigate()


    const[data,setData]=useState(
        {
            email:"",
            password:""
        }
    )
    const[error,setError]=useState(false)

    function handleChange(event)
    {
       setData({
         ...data,
        [event.target.name]:event.target.value
       }
       )
       
    }
    
    function handleSubmit(event)
    {
        event.preventDefault()
        let url="http://localhost:8182/";
        if(data.role=="admin"){
          url =url+"adminlogin";
        }
        else if(data.role=="teacher"){
          url = url + "teacherlogin"
        }
        else{
          url = url + "studentlogin"
        }
        axios.post(url,data)
        .then((res)=>{
            
            if(res.data.message==="admin")
            {
                navigate("/addstudents")
            }  
            else if(res.data.message === "teacher"){
                 navigate("/addstudentmarks")
            } 
            else if(res.data.message === "student"){
              navigate("/viewattendance")
            }          
            else{
                setError(true)
                alert("invalid credentials")
            }
            setData(
                {
                   email:"",
                   password:""
                }
            )
        })
       
    }
//     function handleSubmit(event)
//   {
//     event.preventDefault()
//   if(data.email==="" || data.password==="")
//   {
//     alert("fiels is empty")
//   }
//   axios.post()
  
//   .then((res)=>{
//     if(res.data.message=="")
//     {
//       navigate("/adminnavbar")
     
//     }
//     else{
//       setError(true)
//       alert("invalid credentials")
//     }
//     setData(
//       {
//         email:"",
//         password:""
//       }
//     )
//   });


//   }

    return(
        <div>
          <Loginnavbar />
               <div className="ex1">
        <h1 style={{"fontFamily":"times new roman","fontWeight":"bold","color":"green"}}>LOGIN</h1>
        <div ><center>
        <form style={{"border":"4px solid green","width":"700px"}}>
          <div className="mb-3 row">
            <label
              for="exampleFormControlInput1"
              className="col-sm-3 col-form-label text-right "
            >
              Email address
            </label>
            <div className="col-sm-6">
              <input
               value={data.email}
                type="email"
                className="form-control"
                name="email"
                placeholder="name@example.com"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-3 col-form-label text-right">
              Password
            </label>
            <div className="col-sm-6">
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
            <div>
              <select onChange={handleChange} name="role">
                  <option value="">Select role</option>
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
              </select>
            </div>
            <br/>
            <div>
              <button
                className="btn btn-primary"
                type="submit" 
               onClick={handleSubmit}
              >
                Submit
              </button>
              
       
         
          </div>
        </form></center></div>
      </div>
        </div>
    )
}

export default Adminlogin;