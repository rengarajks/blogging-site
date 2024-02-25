// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/lv', formData);
            console.log('Login successful:', response.data);
            // Redirect user to dashboard or home page
        } catch (error) {
            console.error('Login failed:', error.response.data);
            // Display error message to the user
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
