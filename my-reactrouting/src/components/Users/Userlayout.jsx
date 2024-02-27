import React from 'react'
import axios from 'axios';
import {useState , useEffect} from 'react'
import {NavLink , Outlet} from "react-router-dom"

function Userlayout() {
  const [loading , setLoading] = useState(true);
  const colorNavLink = ({isActive})=>({color: isActive ? "green" : "red"})
  const [users , setUsers] = useState([]);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setUsers(res.data))
    .catch(e => console.log(e))
    .finally(()=>setLoading(false))
  })

  return (
    <div>
      <h2>Users List</h2>
      
      {loading&&<div>loading...</div>}
    <ul>
       
          { users.map((user) =>(
              <li key={user.id}>
                  
                  <NavLink style={colorNavLink} to={`/users/${user.id}`}>{user.name}</NavLink>
              </li>
          ))} 
       <li>
        <NavLink style={colorNavLink} to={"/users/new"} >New Users</NavLink>
       </li>
    </ul>   
    <Outlet context={{hello:"World"}} />
    
    </div>
      
      
   
  )
}

export default Userlayout