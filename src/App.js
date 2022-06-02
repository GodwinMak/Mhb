import Navbar from './components/Navbar'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';
import Slider from './components/Slider/Slider'
import Services from './components/Services';
import MapLocation from './components/MapLocation';

const App = () =>{
  return (
    <>
      <Navbar/>
      <Slider/>
      <About/>
      <Services/>
      <MapLocation/>
    </>
  );
}

export default App;
