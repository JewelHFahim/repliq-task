import { AiOutlineCloudDownload } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Posts from "../../Component/Posts";
import Pagination from "../../Component/Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://healthos-server-jewelhfahim.vercel.app/products`).then(
        (res) => res.json()
      ),
  });

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = products.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return (
      <progress className="progress progress-primary w-full">
        Loading...
      </progress>
    );
  }

  return (
    <div className="mb-20">
      {/* Header */}
      <div className="py-8 bg-primary text-center">
        <p className="my-2 text-xl font-semibold text-white"> Orders </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-11/12 mx-auto my-10 text-center">
        {/* Search */}
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered bg-slate-200  w-11/12 mx-auto"
        />

        {/* Status */}
        <select className="select select-bordered bg-slate-200  w-11/12 mx-auto">
          <option disabled defaultValue="Status"></option>
          <option>Delivered</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Cancel</option>
        </select>

        {/* Download Orders */}
        <div>
          <button
            disabled
            className="btn border-none bg-primary rounded-lg text-white font-semibold w-11/12 "
          >
            Download All Orders{" "}
            <AiOutlineCloudDownload className="text-2xl ml-2" />
          </button>
        </div>
      </div>

      <Posts products={currentPost} isLoading={isLoading}></Posts>
      <div className=" text-right mr-8 lg:mr-20">
        <Pagination
          postPerPage={postPerPage}
          totalPosts={products.length}
          paginate={paginate}
        ></Pagination>
      </div>
    </div>
  );
};

export default Orders;
