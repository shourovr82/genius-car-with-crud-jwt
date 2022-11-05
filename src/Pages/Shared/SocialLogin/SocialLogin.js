import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
  const { handleGoogleLogin } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';


  const googleLogin = () => {
    handleGoogleLogin()
      .then(result => {
        const user = result.user;
        console.log(user);
        const currentUser = {
          email: user.email
        }



        // get jwt token
        fetch('https://genius-car-server-murex.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            // local storage is easiest but  not the best place to store jwt token 
            localStorage.setItem('geniusToken', data.token);
            navigate(from, { replace: true })
          })

      })
      .catch(e => console.log(e))


  }










  return (
    <div>
      <p className='text-center'>Social Login</p>
      <p className="text-center ">
        <button
          onClick={googleLogin}
          className='btn-ghost btn '>Google</button>
      </p>
    </div>
  );
};

export default SocialLogin; 