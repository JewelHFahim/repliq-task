import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleAddCategy = (data, event) => {
    const form = event.target;

    const category = {
      tag: data.tag,
      category: data.category,
      type: data.type,
    };
    fetch("https://healthos-server-jewelhfahim.vercel.app/categories", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(category),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("added Successfylly");
        navigate("/categories");
      });
  };

  return (
    <div>
      <input type="checkbox" id="addCategory" className="modal-toggle" />
      <div className="modal w-full border border-green-600">
        <div className=" modal-box lg:w-6/12 max-w-5xl">
          <label
            htmlFor="addCategory"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-primary"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Add Category</h3>
          <p className="">Add your category and necessary information here</p>

          <form className="card-body" onSubmit={handleSubmit(handleAddCategy)}>
            <div className="grid grid-cols-1 gap-5">
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Tag</span>
                </label>
                <input
                  {...register("tag")}
                  required
                  type="text"
                  placeholder="tag"
                  className="input input-bordered"
                />
              </div>

              <div className="w-full">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  {...register("category")}
                  resource
                  required
                  className="select select-bordered w-full"
                >
                  <option defaultValue={"Select"} disabled>
                    Select
                  </option>
                  <option>Men's</option>
                  <option>Women's</option>
                  <option>Electronics</option>
                </select>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input
                  {...register("type")}
                  required
                  type="text"
                  placeholder="type"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="modal-action">
              <button
                type="submit"
                className="btn border-none bg-primary rounded-lg text-white font-semibold px-10 mx-auto"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
