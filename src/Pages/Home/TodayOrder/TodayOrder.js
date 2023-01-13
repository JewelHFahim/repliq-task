import { useQuery } from '@tanstack/react-query';
import React from 'react';

const TodayOrder = () => {

    const { data: products = [], isLoading} = useQuery({
        queryKey: ["products"],
        queryFn: () =>
        fetch(`http://localhost:5000/products`)
          .then((res) => res.json()),
      });

      if(isLoading){
        return <progress className="progress w-56"></progress>
      }


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
                          <tr key = {product.id}>
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