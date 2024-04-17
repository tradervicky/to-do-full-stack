import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Create = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState()
  // console.log(name, email, phone)
  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();
     axios.post("http://localhost:3000/create", {
      name, email, phone
    })
    .then(result =>{console.log(result)
      navigate('/')
    })
    .catch(err=>console.log(err))
  }
  return (
    <form 
    onSubmit={handleSubmit}
    className="flex justify-center items-center flex-col h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Create a new Record</h2>
      <div className="bg-white rounded-lg p-6 shadow-md w-96">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter the name"
            required
            value={name}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter the email"
            value={email}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter the phone number"
            required
            value={phone}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
            onChange={(e)=>setPhone(e.target.value)}
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
          type='submit'>
            Create Record
          </button>
        </div>
      </div>
    </form>
  );
};

export default Create;
