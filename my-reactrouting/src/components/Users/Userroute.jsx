import React from 'react'
import {Route , Routes} from 'react-router-dom'
import UserList from './UserList'
import User from './User'
import Newuser from './Newuser'

import Userlayout from './Userlayout'


function Userroute() {
  return (
    <>
    
    <Routes>
      <Route element={<Userlayout />}>
       <Route index element = {<UserList />} />
        <Route path=":id" element = {<User />} />
        <Route path="new" element={<Newuser />} />
        </Route>
       
    </Routes>
    </>
    
  )
  
}

export default Userroute