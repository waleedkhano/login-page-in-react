import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import "./App.css";
import Home from "./pages/Home";
import Signin from './pages/Signin';
import Register from './pages/Register';
import Welcome from './pages/Welcome';

const App = () => {
  return (
    <>
      <Toaster position='bottom-center' toastOptions={{ duration: 3000 }} />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/register' element={<Register />} />
          <Route path='/welcome' element={<Welcome />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
