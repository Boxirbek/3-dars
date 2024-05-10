import React from 'react'
import "./Users.css"
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"
import { useDispatch } from 'react-redux'
import { removeToUser } from '../../context/usersSlice'

function Users({ data }) {
 const dispatch=useDispatch()
  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return null;
  }
  return (
    <div className='users__wrapper'>
      {data.map(user =>
        <div key={user.id} className="users__card">
          <img src={user.gender==="male"? male:female} alt="" />
          <h2>{user.name}</h2>
          <h4>{user.adress}</h4>
          <p>{user.profession}</p>
          <p>{user.age}</p>
          <p>{user.call}</p>
          <button onClick={()=> dispatch(removeToUser(user))}>Remove</button>
        </div>
      )}
    </div>
  );
}


export default Users