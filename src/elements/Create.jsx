import React , {useState} from 'react'
import Navbar from './Navbar.jsx'
import axios from 'axios'
import {Link, useNavigate} from  'react-router-dom'

 function Create(){
    const [values, setValues] = useState({
        name: 'name',
        email:'email',
        age:'12',
        genter:'male'
    })
    console.log(values);
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        axios.post('/add_user', values)
        .then((res)=>{
            navigate('/')
        })
        .catch((err) => console.log(err))
    }
        return (
            <div>
                <h3>Add Student</h3>
                <div>
                <Navbar/>
                </div>    
                <form onSubmit={handleSubmit}>
                    <div className="from-group  my-3">
                        <label htmlFor='name' className="p-3">Name </label>
                        <input type='text' name='name' onChange={(e)=>setValues({...values, name:e.target.value})}/>
                    </div>
                    <div className="from-group  my-3">
                        <label htmlFor='email' className="p-3">Email </label>
                        <input type='text' name='email' onChange={(e)=>setValues({...values, email:e.target.value})}/>
                    </div>
                    <div className="from-group  my-3">
                        <label htmlFor='age' className="p-4">Age </label>
                        <input type='text' name='age' onChange={(e)=>setValues({...values, age:e.target.value})}/>
                    </div>
                    <div className="from-group  my-3">
                        <label htmlFor='gender' className="p-3">Gender </label>
                        <input type='text' name='gender' onChange={(e)=>setValues({...values, gender:e.target.value})}/>
                    </div>   
                    <button type='submit' className="button">Submit</button>
                </form>
            </div>
        )
 }

 export default Create 