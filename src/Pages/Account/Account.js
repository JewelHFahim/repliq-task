import React, { useContext } from "react";
import profilePic from "../../Assets/user.jpg";
import { UserContext } from "../../Context.js/AuthContext";

const Account = () => {

  const {user} = useContext(UserContext);

  return (
    <div className="mb-20">
      {/* Header */}
      <div className="py-8 bg-primary text-center">
        <p className="my-2 text-xl font-semibold text-white">Edit Profile </p>
      </div>

      <div className="overflow-x-auto my-10 px-5">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">


            <div className="w-72 h-72 lg:mr-10">
                {
                  user.photoURL = null ?
                  <img className="rounded-full" src={user.photoURL} alt="" />
                  :
                  <img className="rounded-full" src={profilePic} alt="" />
                }
            </div>

            <div>
              <h1 className="text-xl font-bold">Name:{user?.displayName}</h1>
              <p className="py-6">Role: Admin</p>
              <p className="">Email: {user?.email}</p>
              <p className="py-6">Number: {user?.phone}</p>
              <button className="btn btn-primary">Update Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
