import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import Todos from './components/Todos'
import Update from './components/Update'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Todos/>}/>
       <Route path='/create' element={<Create/>}/>
       <Route path='/update/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App