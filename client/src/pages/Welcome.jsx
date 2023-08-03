import { toast } from 'react-hot-toast';
import './css/welcome.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
  
    const logoutHandler = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('/user/logout');
  
        if (response.data.message) {
          toast.success(response.data.message);
          navigate('/signin');
        }
      } catch (error) {
        toast.error('An error occurred. Please try again.');
      }
    };
  
    return (
      <>
        <div className="welcome">
          <h1>Welcome to the new page</h1>
          <form onSubmit={logoutHandler}>
            <button type="submit">LogOut</button>
          </form>
        </div>
      </>
    );
  };
  
  export default Welcome;
  