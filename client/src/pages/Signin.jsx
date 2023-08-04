import { useState } from 'react';
import './css/registerSign.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/action';

const Signin = () => {

  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch()

  const signUser = async (e) => {
    e.preventDefault();
    const {email, password} = data;
    dispatch(login(email, password))
  
  };

  return (
    <>
      <div className="image"></div>
      <div className="container">
        <h1>Sign in</h1>
        <form action="POST" onSubmit={signUser}>
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