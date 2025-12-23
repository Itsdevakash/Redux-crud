import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewCustomer from './NewCustomer'


export default function App() {

  return (
     <BrowserRouter>
     <Routes> 
       <Route path='/' element={<Home />} />
       <Route path="new-customer" element={<NewCustomer />} />
       </Routes>
     </BrowserRouter>
  )
}
