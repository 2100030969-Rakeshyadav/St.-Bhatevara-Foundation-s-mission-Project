import React from 'react';
import './GenderPieChart.css'
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Label } from 'recharts';

const data = [
    { name: 'Male', value: 60 },
    { name: 'Female', value: 40 },
];

const COLORS = ['#b5b3e6','#9290ca' ];
const labels=['male,female']

const GenderPieChart = () => {
    return (
        <div className='pieChart'>
        <ResponsiveContainer width="100%" height={180}>
            <PieChart>
                <Pie 
                    data={data} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={80} 
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length] } />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
        </div>
    );
};

export default GenderPieChart;
