/*import React, { useContext, useState } from 'react'
import { AppContext } from '../../../contexts/AppProvider'
import Button from 'react-bootstrap/Button';
import SingleStudent from '../SingleStudent/SingleStudent';
import { useNavigate } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import './StudentInfo.css'

function StudentInfo() {
    const navigate=useNavigate()
    const {user}=useContext(AppContext);
    
    const [userInfo,setUserInfo]=useState(user)
  return (
    <div>
         <div className='admin-table'>
        <div className="heading">Student Details...</div>
        
    <div className="table-heading">
        <div className="content">Sno</div>
        <div className="content">Name</div>
        <div className="content">Gender</div>
        <div className="content">Percentage</div>
        <div className="content">College Name</div>
        
        <div className=''></div>
    </div>
    <div className="table-content">
        {user.map((userData, index) => (
            <div className="table-row" key={index}>
                <div className="content">{index + 1}</div>
                <div className="content">{userData.name}</div>
                <div className="content">{userData.gender}</div>
                <div className="content">{userData.percentage}</div>
                <div className="content">{userData.collegename}</div>
                <div className='content'>
                    <ImCross className='button' onClick={()=>navigate(`/userVerfication/${userData.name}`)}/>

                    </div>
               
            </div>
        ))}
    </div>
</div>
    </div>
  )
}

export default StudentInfo*/