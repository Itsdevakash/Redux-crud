import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

  const Customer =[
    {
      id:1,
      name:"John Doe",
      product:"john",
      price:123,
      discount:"10%",
    
    }  ,           
      {
        id:2,
        name:"Jane Smith",
        product:"jane",
        price:456,
        discount:"15%",
     
      } ,
      {   
        id:3,
        name:"Mike Johnson",
        product:"mike",
        price:789,
        discount:"5%",
     
      }  , 
          {   
        id:4,
        name:"Emily Davis",
        product:"emily",
        price:321,
        discount:"20%",
     
          },
            {
        id:5,   
        name:"David Wilson",
        product:"david",
        price:654,
        discount:"12%",
       
            },
            {
        id:6,
        name:"Sarah Brown",
        product:"sarah",
        price:987,
        discount:"8%",
      
            },
            { 
        id:7,
        name:"Chris Lee",
        product:"chris",
        price:147,
        discount:"18%",
      
            }
  ]
  return (
    <div className='bg-gray-200 min-h-screen py-16'>
    <div className='bg-white rounded-lg shadow-lg w-8/12 mx-auto p-6'>
<div className='flex justify-between items-center '>
  <h1 className='text-4xl font-bold text-rose-600'>Redux crud</h1>
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
          <td className='border px-4 py-2'>{item.name}</td>
          <td className='border px-4 py-2'>{item.product}</td>
          <td className='border px-4 py-2'>{item.price}</td>
          <td className='border px-4 py-2'>{item.discount}</td>        
          <td className='border px-4 py-2'>
            <button className='text-white bg-green-600 px-4 py-1.5 font-medium mr-2 rounded-lg'><i className="ri-file-edit-fill"></i></button>
            <button className='text-white bg-red-600 px-4 py-1.5 font-medium rounded-lg'><i className="ri-delete-bin-6-line"></i> </button>
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
