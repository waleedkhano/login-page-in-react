import './css/registerSign.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerForm } from '../redux/action';

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (e) => {
    e.preventDefault();

    dispatch(registerForm(name, email, password));
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="btn">
            <button type="submit">Create account</button>
            <Link to="/login">Already have an account</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
