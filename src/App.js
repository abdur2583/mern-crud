import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './elements/Home.jsx'
import Edit from './elements/Edit.jsx'
import Read from './elements/Read.jsx'
import Create from './elements/Create.jsx'
function app(){
  return (
    <div className='container text-center bg-light'>
    <h2>Student Management </h2>
    <BrowserRouter>
          <Routes>
              <Route path='/' element={ <Home/> }/>
              <Route path='/create' element={ <Create/> }/>
              <Route path='/read/:id' element={ <Read/> }/>
              <Route path='/edit/:id' element={ <Edit/> }/>
          </Routes>
    </BrowserRouter>
    </div>
  )
}
export default app