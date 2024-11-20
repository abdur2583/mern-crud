import React, { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', age: '', gender: ' ' });

    useEffect(() => {
        axios.get(`/get_user/${id}`)
            .then((res) => {
                setFormData({
                    name: res.data.name,
                    email: res.data.email,
                    age: res.data.age,
                    gender: res.data.gender
                });
            })
            .catch((err) => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/update_user/${id}`, formData)
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h3>Update Student</h3>
            <Link to='/' className="btn justify-end btn-success">Back</Link>
            <div>
                <Navbar />
            </div>
            <form onSubmit={handleSubmit} className='form '>
                <div className="from-group my-3">
                    <label htmlFor='name' className="p-3">Name </label>
                    <input
                        value={formData.name}
                        type='text'
                        name='name'
                        onChange={handleChange}
                    />
                </div>
                <div className="from-group my-3">
                    <label htmlFor='email' className="p-3">Email </label>
                    <input
                        value={formData.email}
                        type='email'
                        name='email'
                        onChange={handleChange}
                    />
                </div>
                <div className="from-group my-3">
                    <label htmlFor='age' className="p-4">Age </label>
                    <input
                        value={formData.age}
                        type='number'
                        name='age'
                        onChange={handleChange}
                    />
                </div>
                <div className="from-group my-3">
                    <label htmlFor='gender' className="p-3">Gender </label>
                    <input
                        value={formData.gender}
                        type='text'
                        name='gender'
                        onChange={handleChange}
                    />
                </div>
                <button type='submit' className="btn text-success">Update</button>
            </form>
        </div>
    );
}

export default Edit;
