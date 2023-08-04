import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { ProtectedRoute } from "protected-route-react"

import Home from "./pages/Home";
import Signin from './pages/Signin';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

const App = () => {

  const { isAuthenticated, message, error } = useSelector((state) => state.user)

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <>
      <Router>
        <Toaster position="top-center" reverseOrder={false}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={
          <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/welcome"> 
            <Signin />
          </ProtectedRoute>
        } />
          <Route path="/register" element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/welcome">
              <Register />
            </ProtectedRoute>
          } />
          <Route path="/welcome" element={
            <ProtectedRoute isAuthenticated={isAuthenticated} >
              <Welcome />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App;
