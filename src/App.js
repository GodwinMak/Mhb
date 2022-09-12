import Navbar from './components/Navbar'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';
import Slider from './components/Slider/Slider'
import Services from './components/Services';
import MapLocation from './components/MapLocation';
import Gallery from './components/Gallery';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () =>{
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Slider/>
      <About/>
      <Services/>
      <MapLocation/>
    <Routes>
      <Route path= '/gallery' element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
