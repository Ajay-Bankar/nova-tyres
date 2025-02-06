import './index.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Tyres from './pages/tyres';
import Wheels from './pages/wheels';
import Servicerepairs from './pages/servicerepairs';
import Footer from './components/Footer'
import Fittingdelivery from './pages/fittingdelivery';
import Tyreguide from './pages/tyreguide';
import Help from './pages/help';


function App() {

  
  return (
    <BrowserRouter>

      <Header />
      <div className="mt-[80px]">


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tyres" element={<Tyres />} />
          <Route path="/wheels" element={<Wheels />} />
          <Route path="/servicerepairs" element={<Servicerepairs />} />
          <Route path="/fittingdelivery" element={<Fittingdelivery />} />
          <Route path="/tyreguide" element={<Tyreguide />} />
          <Route path="/help" element={<Help />} />


        </Routes>

      </div>

      {/* <Footer /> */}

    </BrowserRouter>
  );
}

export default App;
