import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { TbListDetails } from 'react-icons/tb';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const TodayOrder = () => {

    const { data: products = [], refetch, isLoading} = useQuery({
        queryKey: ["products"],
        queryFn: () =>
        fetch(`https://fakestoreapi.com/products`)
          .then((res) => res.json()),
      });


    return (
        <div>
              {/*All Orders */}
              <p className='text-2xl text-center'>Recent Order</p>
              <hr  className='mx-10'/>
      

            {/* Recent Orders */}
          <div className="overflow-x-auto px-5 py-2 mx-5">
            <table className="table w-full">
            <thead>
              <tr>
                {/* <th>SL</th> */}
                <th>Order Time</th>
                <th>Product Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Payement Method</th>
                <th>Order Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {
              products.map((product, i) =>
                          <tr key = {product.i}>
                            <th> 24 Dec 22</th>
                            <td className='flex items-center'>
                            <img className=' w-24 h-24 p-5' src={product.image} alt="" />
                            {product.title.slice(0,10)}
                            </td>
                            <td>Farmgate, Dhaka</td>
                            <td>01911209322</td>
                            <td>COD</td>
                            <td>${product.price}</td>
                            <td className='text-primary'>Delivered</td>
                          </tr> )
                  }
              </tbody>
            </table>
          </div>
          
        </div>
    );
};

export default TodayOrder;