import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotfound from './component/LandingPage/PageNotfound';
import Home from "./component/LandingPage/Home";
import Login from './component/form/login';
import Header from './component/LandingPage/Header&footer/Hearder';
import Register from './component/form/register';
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<PageNotfound />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
