import React, { useState } from "react"
import Adminnavbar from "./Adminnavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Addstudents() {
const navigate=useNavigate()
  const [data, setData] = useState(
    {
      firstname: "",
      lastname: "",
      email: "",
      marks: "",
      noOfPresentDays: "",
      noOfAbsentDays: ""
    })


  function handleChange(event) {
    setData(
      {
        ...data,
        [event.target.name]: event.target.value
      }
    )
  }
  const onSubmit = async (e) => {
    e.preventDefault();
     await axios.post("http://localhost:8182/add-student", data);
     alert("Student added Successfully")
     navigate("/addstudents")
 
   };


  return (
   

    <div className="ex1">
       <Adminnavbar />

      <h1 style={{"fontFamily":"times new roman","color":"purple"}}>Add Students</h1>
      <form onSubmit={(e)=>onSubmit(e)}>
        <div className="mb-3 row">
          <label
            for="exampleFormControlInput1"
            className="col-sm-3 col-form-label text-right" 
          >
            Firstname
          </label>
          <div className="col-sm-6">
            <input
              value={data.firstname}
              type="text"
              className="form-control"
              name="firstname"
              placeholder="enter firstname"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-3 col-form-label text-right">
            LastName
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              name="lastname"
              value={data.lastname}
              onChange={handleChange}
              className="form-control"
              placeholder="enter lastname"
              id="inputPassword"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label
            for="exampleFormControlInput1"
            className="col-sm-3 col-form-label text-right"
          >
            Email
          </label>
          <div className="col-sm-6">
            <input
              value={data.email}
              type="text"
              className="form-control"
              name="email"
              placeholder="enter email"
              onChange={handleChange}
            />
          </div>
        </div>

         <div className="mb-3 row">
          <label
            for="exampleFormControlInput1"
            className="col-sm-3 col-form-label text-right"
          >
            password
          </label>
          <div className="col-sm-6">
            <input
              value={data.password}
              type="password"
              className="form-control"
              name="password"
              placeholder="enter password"
              onChange={handleChange}
            />
          </div>
        </div>


        <div className="form-group mb-3 row">
          <div className="col-sm-6">
            <button
              className="  btn btn-success   btn-lg float-right"
              type="submit"
            //  onClick={handleSubmit}
            >
              Add
            </button>

          </div>

        </div>
      </form>
    </div>
  )
}

export default Addstudents;