import React from 'react'
import {Link, useNavigate} from  'react-router-dom'
 function Navbar(){
    return (
        <div>
            <div>
                    <Link to='/' className="btn border-1">home</Link>
                    <Link to='/read' className="btn border-1">Read</Link>
                    <Link to='/create' className="btn border-1">Create</Link>
                    <Link to='/edit' className="btn border-1">Edit</Link>
                </div> 
        </div>
    )
 }

 export default Navbar 