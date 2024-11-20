import React , {useEffect , useState} from 'react'
import Navbar from './Navbar.jsx'
import {Link, useParams, useNavigate}  from  'react-router-dom'
import axios from 'axios'

 function Read(){
    const {id} = useParams()
    const [values, setValues] = useState([])
    console.log(values);
    useEffect(() => {
        axios.get('/get_user/'+id+'')
    .then((res)=>{            
        setValues(res.data)
    })
    .catch((err) => console.log(err))
},[id ])
        return (
            <div>
                <h3> Student details</h3>
                <div>
                <Navbar/>
                </div>    
                {
                    values.map( ( item, index) => {
                        return (
                            <div key={index} className='bg-gray-200 p-3 my-3 '>
                            <h1> ID: {item.id}</h1>
                            <h1> Name: {item.name}</h1>
                            <h1> Email: {item.email}</h1>
                            <h1> Age: {item.age}</h1>
                            <h1> Gender:  {item.gender}</h1>
                            </div>
                        )
                    })
                }
              
                    
                
            </div>
        )
 }

 export default Read