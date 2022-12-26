import React from "react";
import { useLoaderData } from "react-router-dom";
import UpdateProduct from "./UpdatProduct";

const ProductDetails = () => {

  const products = useLoaderData();
  const {sku, title, image, sale, description, category } = products;


  return (
    <div className="mb-16">
      {/* Header */}
      <div className="py-8 bg-primary text-center">
        <p className="my-2 text-xl font-semibold text-white">Products Details</p>
      </div>

      {/* Product Details */}
      <div className="m-6 p-5 grid grid-cols-1 lg:grid-cols-2">
      <div className=" flex justify-center">
        <img src={image} alt="" className="w-72" />
      </div>
      <div className="pt-4">
          <p className="font-semibold">Status: <span className="text-primary">This product Showing</span></p>
          <p className="text-2xl my-2">{title}</p>
          <p>SKU: {sku} </p>
          <p className="mt-4 text-2xl font-bold">${sale}</p>
          <p><span className="text-primary mr-4">In Stock</span> <span className="text-lg">Quantity: 67</span> </p>
          <p className="mt-4">{description}</p>
          <p className="mt-4"><span className="font-bold mr-2">Category:</span>{category}</p>

          <div className="mt-6">
            <label htmlFor="update-modal" className="px-8 py-2 bg-primary text-white rounded-md">Update Product</label>
          </div>

      </div>
      </div>
      {/* <UpdateProduct></UpdateProduct> */}

    </div>
  );
};

export default ProductDetails;
