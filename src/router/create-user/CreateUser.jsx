import React, { useState } from 'react'
import "./CreateUser.css"
import { useDispatch } from 'react-redux'
import { addToUsers } from '../../context/usersSlice'

function CreateUser() {
  const [name, setName] = useState("")
  const [profession, setProfession] = useState("")
  const [age, setAge] = useState(0)
  const [adress, setAdress] = useState("")
  const [call, setCall] = useState("")
  const [gender, setGender] = useState("")
  const dispatch = useDispatch()

  const handleSubmit =(e)=>{
    e.preventDefault()
  let newUser={
    id: new Date().getTime(),
    name : name,
    profession: profession,
    age: +age,
    adress: adress,
    call: call,
    gender: gender
   }
  dispatch(addToUsers(newUser))
  setName("")
  setAdress("")
    setAge("")
    setCall("")
    setGender("")
    setProfession("")
  }
  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className='create__user-form' action="">
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" required placeholder='name' />
        <input value={profession} onChange={(e) => setProfession(e.target.value)} type="text" required placeholder='profession' />
        <input value={age} onChange={(e) => setAge(e.target.value)} type="text" required placeholder='adress' />
        <input value={adress} onChange={(e) => setAdress(e.target.value)} type="number" required placeholder='age' />
        <input value={call} onChange={(e) => setCall(e.target.value)} type="number" required placeholder='call' />

        <select value={gender} onChange={(e) => setGender(e.target.value)} name="" required id="">
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser