import React from "react";
import "./Home.css"
import { FiLayers, FiShoppingCart } from "react-icons/fi";
import { FaPeopleCarry } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { ImCreditCard } from "react-icons/im";
import { TbHeartHandshake } from "react-icons/tb";
import AdminChart from "./AdminChart/AdminChart";
import TodayOrder from "./TodayOrder/TodayOrder";



const Home = () => {


  return (
    <div className="mb-20">
      {/* Header */}
      <div className="py-8 bg-primary text-center">
          <p className="my-2 text-xl font-semibold text-white"> Dashboard Overview </p>
      </div>

      {/* Overview Amount */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-11/12 mx-auto my-8 text-center text-white">
        <div className="bg-primary py-5 rounded-xl">
        <h3 className="flex justify-center"><FiLayers className="text-3xl"/></h3>
        <h3 className="my-2 text-xl">Today Order</h3>
        <h3 className="text-3xl font-bold">$0</h3>
        </div>

        <div className="bg-success py-5 rounded-xl">
        <h3 className="flex justify-center"><FiShoppingCart className="text-3xl"/></h3>
        <h3 className="my-2 text-xl">This month</h3>
        <h3 className="text-3xl font-bold">$6584.65</h3>
        </div>

        <div className="bg-primary py-5 rounded-xl">
        <h3 className="flex justify-center"><ImCreditCard className="text-3xl"/></h3>
        <h3 className="my-2 text-xl">Total Order</h3>
        <h3 className="text-3xl font-bold">$24064.80</h3>
        </div>

      </div>

      {/* Overview Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 w-11/12 mx-auto my-10 text-center shadow-md">

        <div className="border border-slate-200 py-3 rounded-xl flex justify-around items-center">
          <h3 className="bg-green-200 text-green-600 p-2 rounded-full"><FiShoppingCart className="text-2xl"/></h3>
          <div>
          <h3 className="my-2 text-lg">Total Order</h3>
          <h3 className="text-2xl font-bold">160</h3>
          </div>
        </div>

        <div className="border border-slate-200 py-3 rounded-xl flex justify-around items-center shadow-md">
          <h3 className="bg-green-200 text-green-600 p-2 rounded-full"><TfiReload className="text-2xl"/></h3>
          <div>
          <h3 className="my-2 text-lg">Order Pending</h3>
          <h3 className="text-2xl font-bold">26</h3>
          </div>
        </div>

        <div className="border border-slate-200 py-3 rounded-xl flex justify-around items-center shadow-md">
          <h3 className="bg-green-200 text-green-600 p-2 rounded-full"><FaPeopleCarry className="text-2xl"/></h3>
          <div>
          <h3 className="my-2 text-lg">Order Processing </h3>
          <h3 className="text-2xl font-bold">21</h3>
          </div>
        </div>
        
        <div className="border border-slate-200 py-3 rounded-xl flex justify-around items-center shadow-md">
          <h3 className="bg-green-200 text-green-600 p-2 rounded-full"><TbHeartHandshake className="text-2xl"/></h3>
          <div>
          <h3 className="my-2 text-lg">Order Delivered</h3>
          <h3 className="text-2xl font-bold">126</h3>
          </div>
        </div>
      </div>

      <AdminChart></AdminChart>
      <TodayOrder></TodayOrder>

  </div>
  );
};

export default Home;
