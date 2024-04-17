import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const {id} = useParams()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState()
  const navigate = useNavigate()
  // console.log(id)
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = ()=>{
    axios.get("http://localhost:3000/getUser/"+id)
    .then(result=>{
      setName(result.data.name)
      setEmail(result.data.email)
      setPhone(result.data.phone)
    })
    .catch(err=>console.log(err))
  }

  // handle Change functions 
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  // handleUpdate function 
const handleSubmit = (e)=>{
  e.preventDefault();
  axios.put("http://localhost:3000/update/"+id,
  {
name,
email, 
phone
  })
  .then(result=>{
    console.log(result)
    navigate('/')
  })
  .catch(err=>console.log(err))
}
  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Update the Record</h2>
      <div className="bg-white rounded-lg p-6 shadow-md w-96">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            required
            value={name}
            onChange={handleNameChange}
            placeholder="Enter the name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
          />
          <input
            type="email"
            required
            placeholder="Enter the email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
          />
          <input
            type="text"
            placeholder="Enter the phone number"
            required
            value={phone}
            onChange={handlePhoneChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400"
          />
          <button 
          type='submit'
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none">
            Update Record
          </button>
        </div>
      </div>
    </form>
  );
};

export default Update;
