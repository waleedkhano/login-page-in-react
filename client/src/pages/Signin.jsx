import { useState } from 'react';
import './css/registerSign.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Signin = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const signUser = async (e) => {
    e.preventDefault();

    const { email, password } = data;
    try {
      const response = await axios.post('/user/signin', {
        email,
        password
      });

      const { data } = response;
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate('/welcome');
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="image"></div>
      <div className="container">
        <h1>Sign in</h1>
        <form action="" onSubmit={signUser}>
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
            <button type="submit">Sign in</button>
            <Link to="/register">Don't have an account</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;