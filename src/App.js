import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registration from "./components/Layouts/Registration"; 
import Login from "./components/Layouts/Login";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import Services from "./routes/Services";
import FeedBack from "./routes/FeedBack";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Registration" element={<Registration/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="AboutUs" element={<AboutUs/>} />
        <Route path="ContactUs" element={<ContactUs/>}/>
        <Route path="Services" element={<Services/>} />
        <Route path="FeedBack" element={<FeedBack/>}/>
      </Routes>
    </Router>
  );
}

export default App;
