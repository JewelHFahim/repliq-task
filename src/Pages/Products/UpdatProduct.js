import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateProduct = () => {

    const products = useLoaderData();
    const {sku, title, buy, image, quantity, sale, description, category } = products;

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddProduct = (data, event) => {
    const form = event.target;
    const image = data.img[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "PATCH",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);

          const product = {
            title: data.title,
            sku: data.sku,
            category: data.category,
            buy: data.buy,
            sale: data.sale,
            quantity: data.quantity,
            // buy: data.buy,
            // sale: data.sale,
            description: data.description,
            image: imgData.data.url,
          };
          fetch("https://healthos-server-one.vercel.app/products", {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              form.reset();
              toast.success("added Successfylly");
              navigate("/products");
            });
        }
      });
  };

    return (
        <div>

            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal w-full border border-green-600">
            <div className=" modal-box w-11/12 max-w-5xl">

            <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2 bg-primary">✕</label>
                <h3 className="font-bold text-lg">Add Product</h3>
                <p className="">Add your product and necessary information from here</p>
                
                <form className="card-body" onSubmit={handleSubmit(handleAddProduct)}>
            {/* 1st row */}
            <div className="flex justify-center">

              <div className="form-control w-2/4">
                <label className="label">
                  <span className="label-text">Product Title/Name</span>
                </label>
                <input {...register("title")} defaultValue={title} required type="text" placeholder="product title" className="input input-bordered"/>
              </div>

              <div className="form-control w-1/4 mx-4 ">
                <label className="label">
                  <span className="label-text">SKU</span>
                </label>
                <input {...register("sku")} defaultValue={sku} required type="text" placeholder="SKU" className="input input-bordered"/>
              </div>

              <div className="w-1/4">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select {...register("category")} defaultValue={category} resource required className="select select-bordered w-full">
                  <option defaultValue={"Good"} disabled selecte> Select</option>
                  <option>Men's</option>
                  <option>Women's</option>
                  <option>Electronics</option>
                </select>
              </div>
            </div>

            {/* 2nd row */}
            <div className="flex justify-center">

               <div className="form-control w-2/4">
                <label className="label">
                  <span className="label-text">Product Price</span>
                </label>
                <input {...register("buy")} defaultValue={buy} required type="text" placeholder="product price" className="input input-bordered"/>
              </div>

              <div className="form-control mx-4 w-1/4 ">
                <label className="label">
                  <span className="label-text">Sale Price</span>
                </label>
                <input {...register("sale")} defaultValue={sale} required type="number" placeholder="sale price" className="input input-bordered"/>
              </div>

              <div className="form-control w-1/4">
                <label className="label">
                  <span className="label-text">Product Quantity</span>
                </label>
                <input {...register("quantity")} defaultValue={quantity} required type="number" placeholder="product quantity" className="input input-bordered"/>
              </div>
              
            </div>


            {/* 3rd row */}
            <div className="flex justify-center">

              <div className="form-control w-2/4 mr-4">
                <label className="label">
                  <span className="label-text">Product Description</span>
                </label>
                <input {...register("description")} defaultValue={description} required type="text" placeholder="description" className="input input-bordered"/>
              </div> 

              <div className="form-control w-2/4">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input {...register("img")} defaultValue={image} required type="file" placeholder="image" className="mt-2"/>
              </div>
            </div>

            <div className="modal-action">
                <button className='btn border-none bg-primary rounded-lg text-white font-semibold px-10 mx-auto'>Update Product</button>
                </div>
          </form>
            </div>
            </div>
        </div>
    );
};

export default UpdateProduct;