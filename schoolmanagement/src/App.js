import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Addteachers from './Components/Addteachers';
import Adminlogin from './Components/Adminlogin';
import Addstudents from './Components/Addstudents';
import Addstudentmarks from "./Components/Addstudentmarks"
import Addstudentdetails from './Components/Addstudentdetails';
import Viewattendance from './Components/Viewattendance';
import HomePage from './Components/HomePage';
import ContactUs from './Components/ContactUs';
import Gallery from './Components/Gallery';
import EditMarks from './Components/EditMarks';
import Protected from './Components/Protected';
import Studentlogin from './Components/Studentlogin';
import Teacherlogin from './Components/Teacherlogin';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
         
         <Route exact path="/" element={<HomePage />}/>
         <Route exact path="/adminlogin" element={<Adminlogin/>}/>
         <Route exact path="/studentlogin" element={<Studentlogin/>}/>
         <Route exact path="/teacherlogin" element={<Teacherlogin/>}/>
         <Route exact path="/gallery" element={<Gallery/>}/>
         <Route exact path="/contactUs" element={<ContactUs/>}/>
         <Route exact path="/addstudents" element={<Addstudents />}/>
         <Route exact path="/editmarks/:id" element={<EditMarks />}/>
         <Route exact path="/addteachers"  element={<Addteachers />}/>
         <Route exact path="/addstudentmarks"  element={<Addstudentmarks />}/>
         <Route exact path="/addstudentdetails" element={<Addstudentdetails/>}/>
         <Route exact path="/viewattendance" element={<Viewattendance />}/>
      </Routes>
      </Router>
    </div>
  );

}

export default App;
