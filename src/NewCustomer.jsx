import React from 'react'
import { Link } from 'react-router-dom'

export default function NewCustomer() {
  return (
    <div className='bg-gray-200 min-h-screen py-8'>
        <div className='w-6/12 bg-white mx-auto p-8 shadow-lg rounded-lg space-y-8'>
        <h1 className='text-5xl font-bold text-center'>New Customer</h1>
        <form className='space-y-6'>
        <div className='flex flex-col gap-1'>
            <label className='text-lg font-medium'>Customer's Name</label>
            <input type="text" className='w-full border px-4 py-2 mt-2 rounded-lg' placeholder='Enter your Customer Name' name='customerName' required/>
        </div>

        <div className='flex flex-col gap-1'>
            <label className='text-lg font-medium'>Product</label>
            <input type="text" className='w-full border px-4 py-2 mt-2 rounded-lg' placeholder='Enter your product Name' name='productName' required/>
        </div>


        <div className='flex flex-col gap-1'>
            <label className='text-lg font-medium'>Price</label>
            <input type="number" className='w-full border px-4 py-2 mt-2 rounded-lg' placeholder='Enter your Price' name='price' required/>
        </div>

         <div className='flex flex-col gap-1'>
            <label className='text-lg font-medium'>Discount</label>
            <input type="number" className='w-full border px-4 py-2 mt-2 rounded-lg' placeholder='Enter your Discount' name='discount' required/>
        </div>



         <button type='submit' className='w-full bg-indigo-600 text-white px-6 py-3 font-medium rounded-lg hover:bg-indigo-700 transition duration-300'> Add Customer</button>   

        </form>
      <center>  <Link to="/" className='text-lg bg-black text-white p-2 rounded-lg'> <i className="ri-arrow-left-line"></i> Back </Link></center>
        </div>

    </div>
  )
}
