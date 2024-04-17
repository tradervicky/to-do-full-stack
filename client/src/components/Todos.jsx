import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { MdDelete, MdEdit, MdOutlineAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const [data, setData]= useState([])
  const navigate= useNavigate()
  const fetchData = ()=>{
    axios.get("http://localhost:3000/")
    .then(result=>setData(result.data))
    .catch(err=>console.log(err))

  }
  useEffect(()=>{
fetchData()
  },[data])
  const handleUpdateClick = (id)=>{
navigate(`update/${id}`)
  }
  const handleDeleteClick = (id)=>{
    axios.delete("http://localhost:3000/delete/"+id)
    .then(result=>{console.log(result)
      
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="container mx-auto pt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Todos</h2>
        <button 
        onClick={()=>navigate('/create')}
        className="flex items-center bg-green-500 text-white py-2 px-4 rounded-lg focus:outline-none hover:bg-green-600">
          <MdOutlineAdd className="mr-2" size={20} />
          Add Todo
        </button>
      </div>
      <div className="overflow-x-auto ">
        <table className="w-full bg-white border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#093145] text-white">
              <th className="py-3 px-6 text-left">S.N</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((todo, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6">{todo.name}</td>
                <td className="py-4 px-6">{todo.email}</td>
                <td className="py-4 px-6">{todo.phone}</td>
                <td className="py-4 px-6 flex gap-6">
                  <button className="text-red-500 mr-2 focus:outline-none hover:text-red-800"
                  onClick={()=>handleDeleteClick(todo._id)}
                  >
                    <MdDelete size={24} />
                  </button>
                  <button className="text-blue-500 focus:outline-none hover:text-blue-800"
                  onClick={()=>handleUpdateClick(todo._id)}
                  >
                    <MdEdit size={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;
