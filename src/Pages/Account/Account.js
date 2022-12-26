import React from "react";
import profilePic from "../../Assets/messi.jpg";

const Account = () => {
  return (
    <div className="mb-20">
      {/* Header */}
      <div className="py-8 bg-primary text-center">
        <p className="my-2 text-xl font-semibold text-white">Edit Profile </p>
      </div>

      <div className="overflow-x-auto my-10 px-5">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={profilePic}
              className=" w-72 h-72 rounded-lg lg:mr-10"
              alt=""
            />
            <div>
              <h1 className="text-5xl font-bold">Leonel Messi</h1>
              <p className="py-6">Role: Admin</p>
              <p className="">Email: admin@gmail.com</p>
              <p className="py-6">Number: 01911209322</p>
              <button className="btn btn-primary">Update Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
