import React, { useState } from "react"
import Teachernavbar from "./Teachernavbar";


function Addstudentdetails()
{

    const[data,setData]= useState
    (
        {
            noOfPresentDays:"",
            noOfAbsentDays:""
        }
    )

    function handleChange(event)
    {
    setData(
        {
            ...data,
            [event.target.name]:event.target.value
        }
    )
    }
    return(
        <div>
          <Teachernavbar />
            <h1>Add Student Attendence</h1>
            <div className="mb-3 row">
                
          <label
            for="exampleFormControlInput1"
            className="col-sm-3 col-form-label text-right"
          >
            No of present days
          </label>
          <div className="col-sm-6">
            <input
              value={data.noOfPresentDays}
              type="text"
              className="form-control"
              name="noOfPresentDays"
              placeholder="no of present days"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label
            for="exampleFormControlInput1"
            className="col-sm-3 col-form-label text-right"
          >
            No of absent days
          </label>
          <div className="col-sm-6">
            <input
              value={data.noOfAbsentDays}
              type="text"
              className="form-control"
              name="noOfAbsentDays"
              placeholder="no of absent days"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group mb-3 row">
                    <div className="col-sm-6">
                        <button
                            className="  btn btn-primary   btn-lg float-right"
                            type="submit"
                        //  onClick={handleSubmit}
                        >
                            Add
                        </button>

                    </div>
                </div>

        </div>
    )
}

export default Addstudentdetails;