import React from 'react';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Posts = ({products, isLoading}) => {

    if(isLoading){
        <h1>Loading...</h1>
    }


    return (
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

                          <tr key = {product.id}>
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
                                <option disabled defaultValue="Status"></option>
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
    );
};

export default Posts;