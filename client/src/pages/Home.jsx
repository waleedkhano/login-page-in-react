import './css/home.css'
import './css/animate.css'
import { Link } from 'react-router-dom';

const Home = () =>{
    return(<>
 <div className="image"></div>
    <div className="container">
        <div className="heading">
        <h1>welcome </h1>
        <p>Please sign in to your account. if you don't have an account then <br />
            please Register a new account </p>
    </div>
      <div className='links'>
        <li><Link className='link' to='/register'>Register</Link></li>
        <li><Link className='link' to='/login'>Sign in</Link></li>
      </div>

    </div>    
    </>)
}


export default Home;   