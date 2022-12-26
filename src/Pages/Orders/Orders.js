// import axios from "axios";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Orders = () => {

  const { data: products = [], refetch, isLoading} = useQuery({
    queryKey: ["products"],
    queryFn: () =>
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json()),
  });

  if(isLoading){
    return <progress className="progress progress-primary w-full">Loading...</progress>
  }


  return (
    <div className="mb-20">

    {/* Header */}
    <div className="py-8 bg-primary text-center">
        <p className="my-2 text-xl font-semibold text-white"> Orders </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-11/12 mx-auto my-10 text-center">
      {/* Search */}
      <input type="text" placeholder="Type here" className="input input-bordered bg-slate-200  w-11/12 mx-auto" />

      {/* Status */}
      <select className="select select-bordered bg-slate-200  w-11/12 mx-auto">
        <option disabled selected>Status</option>
        <option>Delivered</option>
        <option>Pending</option>
        <option>Processing</option>
        <option>Cancel</option>
      </select>

      {/* Download Orders */}
      <div><button className='btn border-none bg-primary rounded-lg text-white font-semibold w-11/12 '>Download All Orders <AiOutlineCloudDownload className="text-2xl ml-2"/></button></div>
    </div>

            {/* AllOrders */}
            <div className="overflow-x-auto px-5 py-2 mx-5">
            <table className="table w-full">
            <thead>
              <tr>
                <th>SL No</th>
                <th>Product Name</th>
                <th>Time</th>
                <th>Shipping Address</th>
                <th>Phone</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
            {
              products.map((product, i) =>

                          <tr key = {product.i}>
                          <td>{i+1}</td>

                            <td className='flex items-center'>
                            <img className=' w-20 h-20 p-5' src={product.image} alt="" />
                            {product.title.slice(0,10)}
                            </td>
                            <td>24/12/22</td>
                            <td>Farmgate, Dhaka</td>
                            <td>01911209322</td>
                            <td>COD</td>
                            <td>${product.price}</td>
                            <td className="text-primary">Delivered</td>
                            <td>
                            <select className="select select-bordered bg-slate-200  w-11/12 mx-auto">
                                <option disabled selected>Status</option>
                                <option>Delivered</option>
                                <option>Pending</option>
                                <option>Processing</option>
                                <option>Cancel</option>
                              </select>
                            </td>

                            <td>
                              <Link to="/invoice" ><FaFileInvoiceDollar className='text-2xl hover:text-primary'/></Link>
                            </td>
                          </tr> )
                  }
              </tbody>
            </table>
          </div>


    </div>
  );
};

export default Orders;