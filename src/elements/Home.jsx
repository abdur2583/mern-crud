import React ,{useEffect, useState} from 'react'
import {Link, useNavigate} from  'react-router-dom'
import Navbar from './Navbar.jsx'
import axios from 'axios'
 function Home(){
const [values, setValues] = useState([])
const [ deleted, setDeleted] = useState(true)
    
    useEffect(() => {
            if(deleted){
                setDeleted(false)           
            axios.get('/view')
        .then((res)=>{            
            setValues(res.data)
            })
            .catch((err) => console.log(err))
        }
     },[deleted])

    function handleDelete(id){
        axios.get(`/delete_user/${id}`)
        .then((res)=>{            
            setValues(res.data)
        })
        .catch((err) => console.log(err))
    }
           
    return (
        <div>
            
            <Navbar/>
            <h3>All  Student</h3>
            <div>
                <Link to='/create' className="btn justify-content-center btn-success">Add Student</Link>
            
            <table className='table justify-content-center'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                <tbody className='bg-gray'>
                   {
                        values.map((item, index) => {
                            return (
                                <tr key={index} className='my-2 bg-gray p-2 mb-2'>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>
                                        <Link to={`/edit/${item.id}`} className='btn-warning'>Edit</Link>
                                    </td>
                                    <td>
                                        <Link to={`/read/${item.id}`} className='btn-success'>Read</Link>
                                    </td>
                                    <td>
                                        <button 
                                            onClick={() => handleDelete(item.id)} 
                                            className='btn-danger'
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }

                </tbody>                
            </table>    
            </div>        
        </div>
    )
 }

 export default Home 