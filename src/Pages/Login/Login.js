import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  const { login } = useContext(AuthContext)

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(e => console.log(e))
  }

  return (
    <div className="hero w-full my-10">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className='w-3/4' src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">

          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className='btn btn-primary' value="login" />

            </div>
          </form>
          <p className='text-center'>New To Genius? <Link to='/signup' className='text-orange-600 font-bold '>Register </Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;