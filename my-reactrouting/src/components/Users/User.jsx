import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


function User() {
  const colorNavLink = ({ isActive }) => ({ color: isActive ? "green" : "red" })
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const obj = useOutletContext();
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setUser(res.data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div>
      <h2>User Details {obj.hello}</h2>
      {loading && <div>loading...</div>}


      <table border={2}>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>

          </tr>
        </tbody>
        <tbody>
          <tr>

            <td>{id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>


          </tr>

        </tbody>
        {/* <code>
          {JSON.stringify(user)}
        </code> */}
      </table>
      <br />
      <br />

      {parseInt(id) < 10 && (
        <NavLink style={colorNavLink} to={`/users/${parseInt(id) + 1}`}>Next User({parseInt(id) + 1})</NavLink>
      )}


      {/* <NavLink style={colorNavLink} to={`/users/${parseInt(id) + 1}`}>Next User({id})</NavLink> */}

    </div>
  )
}

export default User
