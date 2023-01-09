import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactInfo from './ContactInfo'
import ContactsPage from './ContactsPage'
import CreateMessagePage from './CreateMessagePage'
import Home from './Home'
import MessagesPage from './MessagesPage'
import PageNotFound from './PageNotFound'

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contacts" element={<ContactsPage/>}></Route>
        <Route path="/contacts/:id/pagenotfound" element={<PageNotFound/>}></Route>
        <Route path="/contacts/:id" element={<ContactInfo/>}></Route> 
        <Route path="/messages" element={<MessagesPage/>}></Route>  
        <Route path="/messages/create/:id" element={<CreateMessagePage/>}></Route> 
    </Routes>
  )
}

export default AllRoutes