import React, { useContext } from 'react'
import './Table.css';
import { AppContext } from '../../../contexts/AppProvider';


function Table() {
    const {user} =useContext(AppContext)
    console.log(user)
    if (!user) {
        return <div>Loading...</div>; // You can show a loading indicator or handle the loading state
      }
  return (
    <div className='admin-table'>
        
    <div className="table-heading">
        <div className="content">Sno</div>
        <div className="content">Name</div>
        <div className="content">Gender</div>
        <div className="content">Percentage</div>
        <div className="content">College Name</div>
        <div className="content">Fee</div>
    </div>
    <div className="table-content">
        {user.map((userData, index) => (
            <div className="table-row" key={index}>
                <div className="content">{index + 1}</div>
                <div className="content">{userData.name}</div>
                <div className="content">{userData.gender}</div>
                <div className="content">{userData.percentage}</div>
                <div className="content">{userData.collegename}</div>
                <div className="content">{userData.collegefee}</div>
            </div>
        ))}
    </div>
</div>

  )
}

export default Table