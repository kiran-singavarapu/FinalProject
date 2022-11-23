import React, { useState,useEffect  } from "react"
import Teachernavbar from "./Teachernavbar";
import {Link} from 'react-router-dom'
import axios from "axios"

function Addstudentmarks() {
    const [data, setData] = useState("")
    const [studentsData,setStudentsData]=useState([
    //    
]);
const handleDelete = (id) =>
{
  axios.delete(`http://localhost:8182/delete-student/${id}`)
  var newStudents = studentsData.filter((students) => students.id !== id)
  setStudentsData(newStudents)
}
useEffect(() => {    
    axios.get("http://localhost:8182/students")
    .then((res)=>{
        console.log("response students-->",res.data)
        setStudentsData(res.data)
       
        
    })
    },[]);

    function handleChange(event) {
        setData(
            {
                ...data,
                [event.target.name]: event.target.value
            }
        )
    }
    return (
        <div>
            <Teachernavbar />
            <h1 style={{"fontFamily":"times new roman","color":"purple"}}>UPDATE STUDENT MARKS AND ATTENDENCE</h1>
            {/* <form > 
                <div className="mb-3 row">
                    <label
                        for="exampleFormControlInput1"
                        className="col-sm-3 col-form-label text-right"
                    >
                        Marks
                    </label>
                    <div className="col-sm-6">
                        <input
                            value={data.marks}
                            type="text"
                            className="form-control"
                            name="marks"
                            placeholder="enter marks"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group mb-3 row">
                    <div className="col-sm-6">
                        <button
                            className="  btn btn-primary  btn-lg float-right"
                            type="submit"
                        //  onClick={handleSubmit}
                        >
                            Add
                        </button>

                    </div>
                </div>
            </form> */}
            <div>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">S.NO</th>
                            <th scope="col">Email</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mark</th>
                            <th scope="col">Present Days</th>
                            <th scope="col">Absent Days</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {studentsData.map((student,index)=>{return(<tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{student.email}</td>
                        <td>{student.firstname}</td>
                        <td>{student.marks}</td>
                        <td>{student.noOfPresentDays}</td>
                        <td>{student.noOfAbsentDays}</td>
                        
              <td> <Link className='btn btn-outline-primary mx-2' to={`/editMarks/${student.id}`}>
                Edit
            </Link>
            <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>Delete </button></td>
             </tr>
            
            )})}
                    </tbody>
                </table>
                
            </div>

        </div>

        
    )
}

export default Addstudentmarks;