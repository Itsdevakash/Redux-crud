import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewCustomer from './NewCustomer'
import store from './redux/store'
import { Provider } from 'react-redux'


export default function App() {

  return (
   <Provider store={store}>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path="new-customer" element={<NewCustomer />} />
       </Routes>        
     </BrowserRouter>
    </Provider>
  )
}
