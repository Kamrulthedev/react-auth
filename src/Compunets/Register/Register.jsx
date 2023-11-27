import { Link } from "react-router-dom";
import Socail from "../Socail/Socail";
import useAuth from "../../Custom/useAuth";
import toast from "react-hot-toast";


const Register = () => {

  const { createUser } = useAuth();
  const handlerRegister = (e) => {
    e.preventDefault();
    
    
    //get field values 
    const name = e.target.name.value;
    const email = e.target.email.value;
    const imges = e.target.imges.value;
    const password = e.target.password.value;
   
    // validaton
    if(password.length < 6){
      toast.error('Password must be least 6 charaters')
      return;
    }
    

    // / creating a new user
    createUser(email, password, name, imges)
    .then(result =>
      console.log(result.user)
    )
    .catch(error =>
      console.log(error))
  }



  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handlerRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" name="email"  className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">IMG URL</span>
                </label>
                <input type="text" placeholder="img url" name="imges"  className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="flex justify-between">
                <h1>Aleday a accound.?</h1>
                <Link to={'/Login'}><button type="submit" className="btn btn-ghost">please Login</button></Link>

              </div>
              <div>
                <Socail></Socail>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;