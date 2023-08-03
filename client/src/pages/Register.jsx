import './css/registerSign.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
  
    const { name, email, password } = data;
  
    try {
      const response = await axios.post('/user/register', {
        name,
        email,
        password
      });
  
      const responseData = response.data;
  
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData((prevData) => ({
          ...prevData,
          name: '',
          email: '',
          password: ''
        }));
  
        toast.success('Account has been created successfully');
        navigate('/welcome');
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  

  return (
    <>
      <div className="image"></div>
      <div className="container">
        <h1>Register</h1>
        <form action="" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <div className="btn">
            <button type="submit">Create account</button>
            <Link to="/signin">Already have an account</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;