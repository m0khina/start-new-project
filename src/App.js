import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import { useSelector } from "react-redux";
import Index from "./pages/Login/Index";
import Books from "./pages/Books/Books";
import LearnMore from "./pages/Home/Follow/LearMore/LearnMore";
import Buy from "./pages/Home/Follow/Buy/Buy"
import OurCourse from "./pages/OurCourses/OurCourse";
import AboutUs from "./pages/AboutUs/AboutUs";
import TeamBuilding from "./pages/TeamBuilding/TeamBuilding";
import PrivateOffice from "./pages/PrivateOffice/PrivateOffice";
import ForgotPass from "./pages/Login/ForgotPass/ForgotPass";


function App() {

    return (
        <div className="App">
            <div className="App--bg"/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Index/>}/>
                <Route path="/books" element={<Books/>}/>
                <Route path="/learn-more" element={<LearnMore/>}/>
                <Route path="/buy" element={<Buy/>}/>
                <Route path="/our-course" element={<OurCourse/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/team-building" element={<TeamBuilding/>}/>
                <Route path="/team-building" element={<TeamBuilding/>}/>
                <Route  path="/private-office/all"  element={<PrivateOffice/>}/>
                <Route path="/forgot-pass" element={<ForgotPass/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
