import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbListDetails } from "react-icons/tb";
import { BsToggleOn } from "react-icons/bs";
import { Link } from "react-router-dom";
import AddProducts from "./AddProducts";
import { toast } from "react-hot-toast";

const Products = () => {
  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://healthos-server-one.vercel.app/products`).then((res) =>
        res.json()
      ),
  });

  const handleDelete = (id) => {
    fetch(`https://healthos-server-one.vercel.app/products/${id}`, {
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

  if(isLoading){
    return <progress className="progress w-56"></progress>
  }

  return (
    <div className="mb-20">
      {/* Header */}
      <div className="py-8 bg-primary text-center">
        <p className="my-2 text-xl font-semibold text-white"> Products </p>
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
            htmlFor="my-modal"
            className="btn border-none bg-primary rounded-lg text-white font-semibold w-11/12"
          >
            + Add Product
          </label>
          <AddProducts></AddProducts>
        </div>
      </div>

      {/* All Products */}
      <div className="overflow-x-auto px-5 py-2 mx-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Details</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product.i}>
                <td>2792FE</td>

                <td className="flex items-center">
                  <img className=" w-20 h-20 p-5" src={product.image} alt="" />
                  {product.title.slice(0, 10)}
                </td>

                <td>{product.category}</td>

                <td>${product.sale}</td>
                <td>67</td>
                <td className="text-primary">Selling</td>

                <td>
                  <Link
                    to={`/products/${product._id}`}
                    className="tooltip tooltip-primary"
                    data-tip="Details"
                  >
                    <TbListDetails className="text-2xl hover:text-primary" />
                  </Link>
                </td>

                <td>
                  <BsToggleOn className="text-2xl hover:text-primary" />
                </td>
                <td>
                  <div className="flex text-2xl">
                    <FaEdit className="mr-4 hover:text-primary" />
                    <RiDeleteBin6Line
                      className="hover:text-primary"
                      onClick={() => handleDelete(product._id)}
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

export default Products;
