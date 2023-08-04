import { useDispatch } from 'react-redux';
import './css/welcome.css'
import { logout } from '../redux/action';


const Welcome = () => {
    const dispatch = useDispatch();

    const logoutHandler = async (e) => {
      e.preventDefault();
      dispatch(logout())

    };

    
  
    return (
      <>
        <div className="welcome">
          <h1>Welcome to the new page</h1>
          <form onSubmit={logoutHandler}>
            <div className="welcome-btn">
            <button type="submit">LogOut</button>
            </div>
          </form>
        </div>
      </>
    );
  };
  
  export default Welcome;
  