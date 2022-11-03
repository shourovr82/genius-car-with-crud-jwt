import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Signup = () => {
  const { createUser } = useContext(AuthContext)
  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then(result => {
        const user = result;
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

          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up!</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Name" name='name' className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className='btn btn-primary' value="Register" />

            </div>
          </form>
          <p className='text-center'>Already Have An Account?<Link to='/login' className='text-orange-600 font-bold '>Login  </Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;