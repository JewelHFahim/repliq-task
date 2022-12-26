import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context.js/AuthContext";

const Signup = () => {

  const { register, handleSubmit } = useForm();
  const {createUser} = useContext(UserContext);
  const navigate = useNavigate();


  const hadnleSignup = (data, event) => {
    const form = event.target;
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Signup Success');
        form.reset();
        navigate("/");
      })
      .catch((error) => console.error(error));
  };


  return (
    <div className=" lg:w-6/12 mx-auto">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <p className="text-3xl text-center mt-2">Sign Up</p>

          <form className="card-body" onSubmit={handleSubmit(hadnleSignup)}>

            <div className="form-control">
              <label className="label"><span className="label-text">Name</span></label>
              <input {...register("name")} required type="text" placeholder="name" className="input input-bordered"/>
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text">Phone</span></label>
              <input {...register("phone")} required type="text" placeholder="phone" className="input input-bordered"/>
            </div>

            <div className="form-control">
              <label className="label"> <span className="label-text">Email</span></label>
              <input {...register("email")} required type="email" placeholder="email" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label"> <span className="label-text">Password</span> </label>
              <input {...register("password")} required type="password" placeholder="password" className="input input-bordered"/>
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account? <span className="text-primary font-semibold" >Login</span>
                </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            
          </form>

        </div>
      </div>
    </div>
  );
};

export default Signup;