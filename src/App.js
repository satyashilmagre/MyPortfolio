import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Javasript from './Components/Blogs/Javasript';
import Reactblog from './Components/Blogs/Reactblog';
import Home from './Components/Home';
import Html from './Components/Blogs/Html';
import Angular from './Components/Blogs/Angular';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path="/Components/Blogs/javascript" element={<Javasript />} />
      <Route path="/Components/Blogs/reactblog" element={<Reactblog/>} />
      <Route path="/Components/Blogs/html" element={<Html/>} />
      <Route path="/Components/Blogs/angular" element={<Angular/>} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
