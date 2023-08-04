import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" }); // Dispatch the "loginRequest" action to indicate login request start
    const { data } = await axios.post("http://localhost:5000/user/signin", { email, password }, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    
    dispatch({ type: "loginSuccess", payload: data }); // Dispatch the "loginSuccess" action with response data
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message }); // Dispatch the "loginFail" action with the error message
  }
};

export const registerForm = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });
    const { data } = await axios.post(
      "http://localhost:5000/user/register",
      { name, email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    
    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
    try {
      dispatch({ type: "logoutRequest" }); 
  
      const { data } = await axios.post("http://localhost:5000/user/logout", {
        withCredentials: true,
      });
      
      dispatch({ type: "logoutSuccess", payload: data.message }); // Dispatch the "loginSuccess" action with response data
    } catch (error) {
      dispatch({ type: "logoutFail", payload: error.response.data.message }); // Dispatch the "loginFail" action with the error message
    }
  };
  