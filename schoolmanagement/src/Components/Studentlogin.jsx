import React, { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Loginnavbar from "./Loginnavbar"


function Studentlogin()
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
        axios.post("http://localhost:8182/studentlogin",data)
        .then((res)=>{
            console.log(res.data)
            if(res.data.message==="student")
            {
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
        <h1 style={{"fontFamily":"times new roman","fontWeight":"bold","color":"blue"}}>STUDENT LOGIN</h1>
        <form >
          <div className="mb-3 row">
            <label
              for="exampleFormControlInput1"
              className="col-sm-3 col-form-label text-right"
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
    {/* <div>
    <select class="btn btn-primary">
   <option value="volvo">Admin</option>
    <option value="saab">Teacher</option>
    <option value="fiat">User</option>
    </select>
    </div> */}

          <div className="form-group mb-3 row">
            <div className="col-sm-6">
              <button
                className="  btn btn-primary   btn-lg float-right"
                type="submit" 
               onClick={handleSubmit}
              >
                Submit
              </button>
              
            </div>
         
          </div>
        </form>
      </div>
        </div>
    )
}

export default Studentlogin;