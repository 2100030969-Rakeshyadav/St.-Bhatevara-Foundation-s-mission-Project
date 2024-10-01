// AdminBarChart.jsx
import React from 'react';
import './AdminBarBoard.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { course: 'Engineering', students: 51 },
    { course: 'BSC', students: 29 },
    { course: 'BBA', students: 18 },
    { course: 'Others', students: 19 },
    { course: 'Nursing', students: 13 },
    {course:'Diploma/ITI',students:12},
    {course:'BCA',students:12},
    {course:'Pharmacy',students:8},
    {course:'MBBS',students:4},
    {course:'Architecture',students:3},
    {course:'Law',students:2},
];

const AdminBarChart = () => {
    return (
        <div className='chart'>
            <h1 className='c-title'>Course Distribution Details</h1>
        <ResponsiveContainer width="100%" height={600}>
            <BarChart
                width={600}
                height={400}
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="course" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#8884d8" barSize={50}/>
            </BarChart>
        </ResponsiveContainer>
        </div>
    );
};

export default AdminBarChart;
