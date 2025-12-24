import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector } from "react-redux";
import { DeleteCustomer } from "./redux/slices/customer";


export default function Home() {
 const Customer = useSelector(state => state.customers);
 const dispatch = useDispatch();
 
  return (
    <div className='bg-gray-200 min-h-screen py-16'>
    <div className='bg-white rounded-lg shadow-lg w-8/12 mx-auto p-6'>
<div className='flex justify-between items-center '>
  <h1 className='text-4xl font-bold text-rose-600'>Redux Crud</h1>
  <Link to="/new-customer" className='text-white bg-indigo-600 px-6 py-2.5 font-medium'>   
    <i className="ri-sticky-note-add-line mr-2"></i>
    New Customer
    </Link>
</div>

<table className='table-auto w-full mt-6'>
  <thead>
    <tr className='bg-gray-100 text-left'>
      <th className='px-4 py-2'>S.No</th>
      <th className='px-4 py-2'>Name</th>
      <th className='px-4 py-2'>Product</th>
      <th className='px-4 py-2'>Price</th>
      <th className='px-4 py-2'>Discount</th>
      <th className='px-4 py-2'>Actions</th>
    </tr>
  </thead>
  <tbody>
        {
      Customer.map((item,index)=>(
        <tr key={index}>
          <td className='border px-4 py-2'>{index + 1}</td>
          <td className='border px-4 py-2'>{item.customerName}</td>
          <td className='border px-4 py-2'>{item.productName}</td>
          <td className='border px-4 py-2'>{item.price}</td>
          <td className='border px-4 py-2'>{item.discount}</td>        
          <td className='border px-4 py-2'>
            <button     onClick={() => dispatch(DeleteCustomer(index))}className='text-white bg-red-600 px-4 py-1.5 font-medium rounded-lg '><i className="ri-delete-bin-6-line"></i> </button>
          </td>
        </tr>
      ))
        }
    
  </tbody>
</table>

    </div>
    </div>
  )
}
