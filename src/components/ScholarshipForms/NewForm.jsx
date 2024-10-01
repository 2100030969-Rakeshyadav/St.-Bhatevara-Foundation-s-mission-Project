import { useState } from 'react';
import axios from 'axios';

const NewForm = () => {

  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    percentage: '',
    familyIncome: '',
    fathername: '',
    fatheroccp: '',
    mothername: '',
    motheroccp: '',
    streamofeducation: '',
    collegename: '',
    collegeid: '',
    collegefee: '',
    yearofgrad: '',
    address: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.percentage < 60) {
      alert('You must have a minimum of 60% in 12th Standard.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/register', {
        name: form.name,
        age: form.age,
        gender: form.gender,
        twelve: form.percentage,
        income: form.familyIncome,
        father_name: form.fathername,
        father_occ: form.fatheroccp,
        mother_name: form.mothername,
        mother_occ: form.motheroccp,
        edu_stream: form.streamofeducation,
        college_name: form.collegename,
        college_id: form.collegeid,
        college_fee: form.collegefee,
        grad: form.yearofgrad,
        add: form.address,
        ph: form.phone,
        mail: form.email,
      });
      console.log(response)
      alert('Form submitted successfully.');
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <div className="ml-[25%] FormPage w-[50%]">
      <header className="App-header">
        <h1>Student Scholarship Form</h1>
        <div className="form-container w-[70%]">
          <form onSubmit={handleSubmit} className="form">
            <div>
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
            <div>
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
            <div>
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="percentage">Percentage in 12th Standard:</label>
              <input
                type="number"
                id="percentage"
                name="percentage"
                value={form.percentage}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="familyIncome">Annual Family Income:</label>
              <input
                type="number"
                id="familyIncome"
                name="familyIncome"
                value={form.familyIncome}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="fathername">Father Name:</label>
              <input
                type="text"
                id="fathername"
                name="fathername"
                value={form.fathername}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="fatheroccp">Father Occupation:</label>
              <input
                type="text"
                id="fatheroccp"
                name="fatheroccp"
                value={form.fatheroccp}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="mothername">Mother Name:</label>
              <input
                type="text"
                id="mothername"
                name="mothername"
                value={form.mothername}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="motheroccp">Mother Occupation:</label>
              <input
                type="text"
                id="motheroccp"
                name="motheroccp"
                value={form.motheroccp}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="streamofeducation">Stream of Education:</label>
              <input
                type="text"
                id="streamofeducation"
                name="streamofeducation"
                value={form.streamofeducation}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="collegename">College Name:</label>
              <input
                type="text"
                id="collegename"
                name="collegename"
                value={form.collegename}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="collegeid">College Id:</label>
              <input
                type="text"
                id="collegeid"
                name="collegeid"
                value={form.collegeid}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="collegefee">College Fee:</label>
              <input
                type="number"
                id="collegefee"
                name="collegefee"
                value={form.collegefee}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="yearofgrad">Year of Graduation:</label>
              <input
                type="number"
                id="yearofgrad"
                name="yearofgrad"
                value={form.yearofgrad}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
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
            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
    </div>
  );
};


export default NewForm;

