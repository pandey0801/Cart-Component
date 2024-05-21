import React, { useCallback, useContext } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../store/Context';
import { useState } from 'react';

export default function Login() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();
  const ctx = useContext(Context);
  // console.log(ctx.isLoggedIn);

  const [isLogin, setIsLogin] = useState(true);
 


  // const [isLoading, setIsLoading] = useState(false);


  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(emailInputRef.current.value, passwordInputRef.current.value);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;


  // const  url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3zLM-Lv_vXtqmX-ajC7hatD_7jSHCqyg';

  let url;
  if (isLogin) {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3zLM-Lv_vXtqmX-ajC7hatD_7jSHCqyg';
  } else {
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA3zLM-Lv_vXtqmX-ajC7hatD_7jSHCqyg';
  }

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        // setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then(data => {
            let errorMessage = 'Authentication failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then(data => {
        console.log('idToken:', data.idToken);
        // You can now use the idToken for further API requests or store it as needed.
        // Example: Storing the token in local storage
        const token = data.idToken;
        // localStorage.setItem('token', token);
        localStorage.setItem('email', enteredEmail )
  
        // authCtx.login(data.idToken);
        history.replace('/store');
        ctx.login(data.idToken)
       
      })
      .catch(err => {
        alert(err.message);
      });
    
  };

  // console.log(ctx.isLoggedIn);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  return (
    <>
      <section className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Login' : 'Sign Up'}</h1>
        {/* <h1>{isLogin ? 'Login' : 'Sign Up'}</h1> */}
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              ref={emailInputRef}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Your Password</label>
            <input
              type="password"
              id="password"
              ref={passwordInputRef}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md mb-4"
          >
            {/* Login with existing account */}
            {isLogin ? 'Login' : 'Create Account'}
          </button>

          {/* <button>{isLogin ? 'Login' : 'Create Account'}</button>} */}

          <button
            type='button'
            className="w-full bg-blue-200 text-white py-2 rounded-md mb-4"
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Login with existing account' : 'Create new account '}
          </button>

        </form>
      </section>
    </>
  );
}

