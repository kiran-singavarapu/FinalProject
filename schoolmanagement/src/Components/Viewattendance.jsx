import React from "react"
import axios from "axios"
import Studentnavbar from "./Studentnavbar";

function Viewattendance()
{
    const [studentsData,setStudentsData] = React.useState([]);
    React.useEffect(() => {    
        axios.get("http://localhost:8182/students")
        .then((res)=>{
            console.log("response students-->",res.data)
            setStudentsData(res.data) 
        })
        },[]);
    return(
        <div>
            <Studentnavbar />
            <h1 style={{"fontFamily":"times new roman","color":"purple"}}>View Marks & Attendance</h1>
            <div>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">S.NO</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mark</th>
                            <th scope="col">Present Days</th>
                            <th scope="col">Absent Days</th>
                        </tr>
                    </thead>
                    <tbody>
                    {studentsData.map((student,index)=>{return(<tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{student.firstname}</td>
                        <td>{student.marks}</td>
                        <td>{student.noOfPresentDays}</td>
                        <td>{student.noOfAbsentDays}</td>    
             </tr>
            
            )})}
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}

export default Viewattendance;