import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Teachernavbar from "./Teachernavbar";
import axios from "axios";
export default function EditMarks(){
    const{id}=useParams()
    let navigate=useNavigate();
    const[user,setUser]=useState({
        firstname:"",
        lastname:"",
        email:"",
        marks:"",
        noOfPresentDays:"",
        noOfAbsentDays:""

    });
    const{firstname,email,marks,lastname,noOfPresentDays,noOfAbsentDays}=user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      useEffect(()=>{
        loadUser();
      },[])
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8182/update-student/${id}`, user).then((response)=>{
            setUser(response.data);
            alert("Marks Updated")
        navigate("/");
            console.log(response);
        })
      };
      const loadUser=async()=>{
        await axios.get(`http://localhost:8182/student/${id}`).then((response)=>{
             setUser(response.data);
             console.log(response);
         })
       }
       return(
    <>
        < div className="ex1">

<Teachernavbar />
<div className="container">
    <h1>Update Students</h1>
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
                    value={firstname}
                    type="text"
                    className="form-control"
                    name="firstname"
                    placeholder="enter firstname"
                    onChange={(e)=>onInputChange(e)}
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
                    value={lastname}
                    onChange={(e)=>onInputChange(e)}
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
                    value={email}
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="enter email"
                    onChange={(e)=>onInputChange(e)}
                />
            </div>
        </div>


        <div className="mb-3 row">
            <label
                for="exampleFormControlInput1"
                className="col-sm-3 col-form-label text-right"
            >
                Marks
            </label>
            <div className="col-sm-6">
                <input
                    value={marks}
                    type="text"
                    className="form-control"
                    name="marks"
                    placeholder="enter marks"
                    onChange={(e)=>onInputChange(e)}
                />
            </div>
        </div>

        <div className="mb-3 row">
            <label
                for="exampleFormControlInput1"
                className="col-sm-3 col-form-label text-right"
            >
                No of present days
            </label>
            <div className="col-sm-6">
                <input
                    value={noOfPresentDays}
                    type="text"
                    className="form-control"
                    name="noOfPresentDays"
                    placeholder="enter no Of Present Days"
                    onChange={(e)=>onInputChange(e)}
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
                    value={noOfAbsentDays}
                    type="text"
                    className="form-control"
                    name="noOfAbsentDays"
                    placeholder="enter no Of Absent Days"
                    onChange={(e)=>onInputChange(e)}
                />
            </div>
        </div>


    
    <div className="form-group mb-3 row">
        <div className="col-sm-6">
            <button
                className="  btn btn-primary   btn-lg float-right"
                type="submit"
            >
                Update
            </button>

        </div>
    </div></form>
</div>
</div>
        </>

       )
}