import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { partnerNGO: 'NGO A', students: 100 },
    { partnerNGO: 'NGO B', students: 120 },
    { partnerNGO: 'NGO C', students: 90 },
    { partnerNGO: 'NGO D', students: 140 },
    { partnerNGO: 'NGO E', students: 70 },
];

const PartnerNgoAreaChart = () => {
    return (
        
        <ResponsiveContainer width="80%" height={250}>
            <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="partnerNGO" />
                <YAxis tickCount={10} />
                <Tooltip />
                <Area type="monotone" dataKey="students" stroke="#8884d8" fillOpacity={1} fill="url(#colorStudents)" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default PartnerNgoAreaChart;
