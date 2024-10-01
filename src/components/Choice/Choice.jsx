// import React from 'react'

import { Navigate } from "react-router-dom"
import { useParams, useNavigate } from 'react-router-dom';

const Choice = () => {
    const navigate = useNavigate();
    const EnrollNowHandler=()=>{
        navigate('/registration');
    }
    const LoginHandler=()=>{
        navigate('/registeredStudent');
    }
  return (
    <>
    <div className="flex justify-center ">
        <div className="p-10">
        <div className="shadow-2xl card w-96 h-[12rem] bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400  text-primary-content">
            <div className="card-body">
                <h2 className="card-title text-3xl font-Aleo flex justify-center">New Registration</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-center ">
                    <button onClick={EnrollNowHandler} className="btn mt-8 ">Enroll Now</button>
                </div>
            </div>
        </div>
        </div>
        <div className="p-10">
        <div className="shadow-2xl card w-96 h-[12rem] bg-gradient-to-r from-orange-200 via-orange-300 to-orange-400 text-primary-content">
            <div className="card-body">
                <h2 className="card-title text-3xl font-Aleo flex justify-center">Registered Student</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-center">
                    <button onClick={LoginHandler} className="btn mt-8">Login</button>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Choice