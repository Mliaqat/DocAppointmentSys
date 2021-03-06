import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import DoctorPage from './Component/ViewDoctor/DoctorPage';
import BookAppointment from './Component/BookAppointment/BookAppointment';
import AllAppointment from './Component/AllAppointment/AllAppointment';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
     <Route path="/" element={<Home></Home>}/>
     <Route path='/doctor/:id' element={<DoctorPage/>}></Route>
     <Route path="appointment/:id/:email" element={<BookAppointment></BookAppointment>}></Route>
     <Route path="allappointment" element={<AllAppointment></AllAppointment>}></Route>
        
    </Routes>
    </>
 
  );
}

export default App;
