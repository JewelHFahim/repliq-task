import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { UserContext } from "../../Context.js/AuthContext";

const Customer = () => {
  const { logOut } = useContext(UserContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`https://healthos-server-jewelhfahim.vercel.app/users/`).then(
        (res) => res.json()
      ),
  });

  const handleDelete = (id) => {
    fetch(`https://healthos-server-jewelhfahim.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="mb-20">
      {/* Header */}
      <div className="py-8 bg-primary">
        <p className="my-2 text-center text-xl font-semibold text-white flex justify-center items-center relative">
          {" "}
          Customers{" "}
          <span className="lg:hidden">
            <FiLogOut
              className="absolute right-0 mr-8"
              onClick={handleLogout}
            />
          </span>
        </p>
      </div>

      {/* Search */}
      <div className=" w-8/12 mx-auto my-6 text-center">
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered bg-slate-200  w-11/12 mx-auto"
        />
      </div>

      {/* All Customers */}
      <div className="overflow-x-auto mx-8">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Joning Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>HOS{i + 1}</th>
                <td>24/12/22</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.zipcode}</td>
                <td>
                  <div className="flex text-2xl">
                    <FaEdit className="mr-4 hover:text-primary" />
                    <RiDeleteBin6Line
                      onClick={() => handleDelete(user._id)}
                      className="hover:text-primary"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;
