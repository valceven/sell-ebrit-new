"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Link from "next/link";

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        date: "",
        gender: "male"
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // This code runs only on the client-side
            // You can put any client-side specific logic here
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await onSubmit(formData);
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };

    const onSubmit = async (values) => {
        try {
            // Serialize form data to JSON
            const jsonData = JSON.stringify(values);
    
            // Make POST request with JSON data
            const { data } = await axios.post(
                "http://localhost/nextjstuts/sell-ebrate-server/routes/register.php",
                jsonData,
                {
                    headers: {
                        'Content-Type': 'application/json' // Set content type to JSON
                    }
                }
            );
    
            console.log("Registration successful:", data);
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return (
        <div className="reg-container">
            <div className="form-box">
                <form className="form" onSubmit={handleSubmit} method="POST">
                    <span className="title">Sign up</span>
                    <span className="subtitle">Create a free account with your email.</span>
                    <div className="form-container"> 
                        <input
                            type="text"
                            className="input"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            className="input"
                            placeholder="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <input
                            type="date"
                            className="input"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                        <select
                            className="input"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <button type="submit" name="btnRegister">Sign up</button>
                    </div>
                </form>
                <div className="form-section">
                    <p>Have an account? <Link href="/login">Log in</Link> </p>
                </div>
            </div>
        </div>
    );
}
