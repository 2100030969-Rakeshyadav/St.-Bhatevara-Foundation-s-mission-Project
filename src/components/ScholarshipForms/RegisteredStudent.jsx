// import React from 'react'
// import { useLocation } from 'react-router-dom';
import "./NewForm.css"
import { useState } from 'react';
import axios from "axios";
const RegisteredStudent = () => {
    // const location = useLocation();
    //const { option } = location.state || {};
    const [form, setForm] = useState({
      name: '',
      age: '',
      gender: '',
      email: '',
      amt:'',
      marks:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        if (form.percentage < 60) {
          alert('You must have a minimum of 60% in 12th Standard.');
        } else {
          // Handle form submission
          alert('Form submitted successfully.');
        }
        try {
          const response = await axios.post('http://localhost:8000/api/v1/users/registered', {
            name: form.name,
            age: form.age,
            gender: form.gender,
            mail: form.email,
            amt: form.amt,
            marks: form.marks
          });
          console.log(response)
          alert('Form submitted successfully.');
        } catch (error) {
          console.error('Error sending data to backend:', error);
        }
      };
      
    return (
        <div className="ml-[25%] FormPage w-[50%] ">
          <header className="App-header">
            <h1 className='font-Aleo font-bold text-3xl'>Enter Login Details</h1>
              <div className="form-container w-[70%]">
                <form onSubmit={handleSubmit} className="form">
                  <div className='font-Aleo'>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='font-Aleo'>
                    <label htmlFor="age">Age:</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={form.age}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='font-Aleo'>
                    <label htmlFor="gender">Gender:</label>
                    <select
                      id="gender"
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      required
                      className='font-Aleo'
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className='font-Aleo'>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='font-Aleo'>
                    <label htmlFor="ScholarshipAmt">Last Scholarship Amount:</label>
                    <input
                      type="text"
                      id="amt"
                      name="amt"
                      value={form.amt}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='font-Aleo'>
                    <label htmlFor="Marks">Marks / CGPA:</label>
                    <input
                      type="text"
                      id="marks"
                      name="marks"
                      value={form.marks}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button className='font-Aleo bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 font-2xl' type="submit">Submit</button>
                </form>
              </div>
          </header>
        </div>
  )
}

export default RegisteredStudent