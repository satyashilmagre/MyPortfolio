
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from './Components/Home';
function App() {
  return (
    // <div >
    //   <Home/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
      {/* <Route path="/javascript" element={<Javascript />} />
      <Route path="/react" element={<Reactblock />} />
      <Route path="/html" element={<Html />} />
      <Route path="/angularblock" element={<Angularblock />} /> */}

    </Routes>
  </BrowserRouter>
  );
}

export default App;
