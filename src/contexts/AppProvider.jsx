import React, { createContext, useContext, useState } from 'react'

export const AppContext=createContext();
function AppProvider({children}) {
    const data=[
      
       
        {
            "name": "Chloe Thomas",
            "age": 20,
            "gender": "Female",
            "percentage": 85,
            "familyIncome": 44000,
            "fathername": "Jack Thomas",
            "fatheroccp": "Carpenter",
            "mothername": "Ruth Thomas",
            "motheroccp": "Nurse",
            "streamofeducation": "Commerce",
            "collegename": "XYZ College",
            "collegeid": 107,
            "collegefee": 17000,
            "yearofgrad": 2023,
            "address": "456 Elm St, Downtown",
            "phone": "2233445566",
            "email": "chloe.thomas@example.com"
        },
        {
            "name": "Lucas Martinez",
            "age": 19,
            "gender": "Male",
            "percentage": 78,
            "familyIncome": 38000,
            "fathername": "Louis Martinez",
            "fatheroccp": "Driver",
            "mothername": "Christine Martinez",
            "motheroccp": "Homemaker",
            "streamofeducation": "Arts",
            "collegename": "LMN College",
            "collegeid": 103,
            "collegefee": 18000,
            "yearofgrad": 2024,
            "address": "567 Pine St, Uptown",
            "phone": "3344556677",
            "email": "lucas.martinez@example.com"
        },
        {
            "name": "Emma Lee",
            "age": 22,
            "gender": "Female",
            "percentage": 86,
            "familyIncome": 46000,
            "fathername": "Richard Lee",
            "fatheroccp": "Engineer",
            "mothername": "Grace Lee",
            "motheroccp": "Nurse",
            "streamofeducation": "Science",
            "collegename": "ABC University",
            "collegeid": 110,
            "collegefee": 20000,
            "yearofgrad": 2023,
            "address": "789 Pine St, Suburbia",
            "phone": "4455667788",
            "email": "emma.lee@example.com"
        },
        {
            "name": "Jacob Walker",
            "age": 21,
            "gender": "Male",
            "percentage": 84,
            "familyIncome": 41000,
            "fathername": "Donald Walker",
            "fatheroccp": "Plumber",
            "mothername": "Barbara Walker",
            "motheroccp": "Receptionist",
            "streamofeducation": "Commerce",
            "collegename": "XYZ College",
            "collegeid": 107,
            "collegefee": 17000,
            "yearofgrad": 2023,
            "address": "234 Birch St, Smallville",
            "phone": "5566778899",
            "email": "jacob.walker@example.com"
        },
        {
            "name": "Amelia Green",
            "age": 18,
            "gender": "Female",
            "percentage": 90,
            "familyIncome": 42000,
            "fathername": "Raymond Green",
            "fatheroccp": "Mechanic",
            "mothername": "Nancy Green",
            "motheroccp": "Teacher",
            "streamofeducation": "Arts",
            "collegename": "LMN College",
            "collegeid": 103,
            "collegefee": 18000,
            "yearofgrad": 2024,
            "address": "345 Cedar St, Hilltown",
            "phone": "6677889900",
            "email": "amelia.green@example.com"
        }
    ];
    const [user,setUser]=useState(data);
    
  return (
   <AppContext.Provider value={{user}}>
    {children}
   </AppContext.Provider>
  )
}

export default AppProvider