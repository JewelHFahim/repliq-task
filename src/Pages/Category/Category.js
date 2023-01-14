import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsToggleOn } from "react-icons/bs";
import { FcBusinesswoman } from "react-icons/fc";
import AddCategory from "./AddCategory";
import { toast } from "react-hot-toast";

const Category = () => {
  const {
    data: categories = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(`https://healthos-server-jewelhfahim.vercel.app/categories/`).then(
        (res) => res.json()
      ),
  });

  const handleDelete = (id) => {
    fetch(`https://healthos-server-jewelhfahim.vercel.app/categories/${id}`, {
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
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div className="mb-20">
      {/* Header */}
      <div className="py-8 bg-primary text-center">
        <p className="my-2 text-xl font-semibold text-white"> Category </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-11/12 mx-auto my-10 text-center">
        {/* Search */}
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered bg-slate-200  w-11/12 mx-auto"
        />

        {/* Category */}
        <select className="select select-bordered bg-slate-200  w-11/12 mx-auto">
          <option disabled selected>
            Category
          </option>
          <option>Shoe</option>
          <option>Jacket</option>
          <option>Sun Glass</option>
          <option>Watch</option>
        </select>

        {/* Add Product */}
        <div>
          <label
            htmlFor="addCategory"
            className="btn border-none bg-primary rounded-lg text-white font-semibold w-11/12"
          >
            + Add Category
          </label>
        </div>
        <AddCategory></AddCategory>
      </div>

      {/* All Products */}
      <div className="overflow-x-auto px-5 py-2 mx-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Icon</th>
              <th>Tag</th>
              <th>Category</th>
              <th>Type</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category, i) => (
              <tr key={category._id}>
                <td>{2792 + i}</td>

                <td>
                  <FcBusinesswoman className="text-2xl" />
                </td>
                <td>{category.tag}</td>
                <td>{category.category}</td>

                <td>{category.type}</td>
                <td>
                  <BsToggleOn className="text-2xl hover:text-primary" />
                </td>
                <td>
                  <div className="flex text-2xl">
                    <FaEdit className="mr-4 hover:text-primary" />
                    <RiDeleteBin6Line
                      onClick={() => handleDelete(category._id)}
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

export default Category;
