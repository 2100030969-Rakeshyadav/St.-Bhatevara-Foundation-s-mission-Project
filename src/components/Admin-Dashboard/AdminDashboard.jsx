import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from './Card/Card';
import './Admin-Dashboard.css'
import Table from './Table/Table';
import AdminBarChart from './BarChart/AdminBarChart';
import GenderPieChart from './GenderPieChart/GenderPieChart';
import PartnerNgoAreaChart from './StudentAreaChart/PatnerNgoAreaChart';

function AdminDashboard() {
  return (
    <div className='Admin'>
        <h1 className='heading-title'>Dashboard</h1>
        <Card/>
        <div className="second-element">
            
        <AdminBarChart/>
        <div className='Charts'>
        <h2 className='title'>Students Distribution Based on Gender</h2>
            <GenderPieChart/>
            <h2 className='title'>Students Distribution Based on NGO</h2>
            <PartnerNgoAreaChart/>
        </div>
        </div>
        <Table/>
    </div>
  )
}

export default AdminDashboard