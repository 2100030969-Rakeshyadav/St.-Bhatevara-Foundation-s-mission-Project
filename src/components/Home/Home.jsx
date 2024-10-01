// import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Home.css';
// import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import pic2 from "../../Assets/pic2.png"
import pic3 from "../../Assets/pic3.png"
import pic4 from "../../Assets/pic4.png"
import pic1 from "../../Assets/pic1.png"
import pic6 from "../../Assets/pic6.jpeg"
import pic7 from "../../Assets/pic7.jpeg"
import pic8 from "../../Assets/pic8.jpeg"
import pic9 from "../../Assets/pic9.jpeg"
import pic10 from "../../Assets/pic10.jpeg"


const images = [
  { url: pic2 },
  { url: pic3 },
  { url: pic4 }
];
const stories = [
  { url: pic8 },
  { url: pic9 },
  { url: pic10 }
];
const contactTab = [
  {
    // icon: <FaMapSigns className="text-4xl" />,
    title: "Soft Skills",
    desription: `Our Soft Skills course equips students with essential communication, teamwork, and leadership abilities to excel in both academic and professional environments.`,
    pic: "https://images.ctfassets.net/pdf29us7flmy/4sBFaziLebwDui0YRZTwjn/09b2317fd756f1ac4cd7ed6f8b700f4f/soft-skills-US.png"
  },
  {
    // icon: <BsFillTelephoneFill className="text-4xl" />,
    title: "Interview Skills",
    desription: `This course prepares students to confidently and effectively navigate job interviews.`,
    pic: "https://onlinegurukul.org/storage/uploads/1674464045-interview-skills.png"
  },
  {
    // icon: <FaPaperPlane className="text-4xl" />,
    title: "English Speaking",
    desription: `Our course boosts fluency and confidence in conversational and professional English.`,
    pic: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/05011631/How-to-Learn-Spoken-English_.png"
  },
  {
    // icon: <BsGlobeAmericas className="text-4xl" />,
    title: "Career Guidance",
    desription:  `This course helps students make informed decisions about their academic and professional paths.`,
    pic: "https://www.blazingcoders.com/appdata/blogs/130/carrierguidenceblazingcoders.png"
  },
  {
    // icon: <BsGlobeAmericas className="text-4xl" />,
    title: "Mentoring",
    desription: `Our mentoring program provides personalized guidance and support for students' academic and personal growth.`,
    pic: "https://a.storyblok.com/f/202591/8000x4571/4088f3a068/mentoring-vector-image.jpg"
  },
];
const Home = () => {
  return (
    <div>
      <div>
        <h1 className="p-2  mt-[10px] flex font-Prata justify-center text-4xl align-center font-bold">Welcome to St. Bhatevara Foundation!</h1>
        </div>
      <SimpleImageSlider
        width="100%"
        height="40%"
        images={images}
        showBullets={true}
        showNavs={true}
      />
      
      <div className="grid grid-cols-2 h-[90vh] grid-rows-3 mt-[20rem]">
        <img
          className="row-span-2 p-2 w-full h-full object-cover"
          src={pic1}
          alt="/"
        />

        {/* Right Side */}

        <div className=" flex flex-col justify-center">
          <p className="font-bold text-5xl md:text-5xl ml-5 mt-[12rem] font-Aleo w-full  px-3">
            Our Objective
          </p>
          <div className="">
            <div>
            <p className="text-xl font-Aleo flex text-justify py-5 mr-10 ml-10">
            The St. Bhatevara Foundation ensures education extends beyond the 12th standard by aiding underprivileged students in accessing graduate-level education. Scholarships cover tuition, accommodation, and other expenses, removing economic barriers. Mentorship, career guidance, and extracurricular support foster holistic development. These efforts empower students, uplift communities, and reduce educational inequality, creating role models and fostering a more equitable society.
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[-14%] ml-[3rem]'>
        <p className='font-Aleo font-bold text-5xl p-4'>Courses</p>
      </div>
      <div className='py-6'>
        <div className="relative container mx-auto mt-[0%]">
          <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
            {contactTab.slice(0, 3).map((x, index) => {
              return (
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={x.pic} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{x.title}</h2>
                    <p>{x.desription}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">More details</button>
                    </div>
                </div>
              </div>
              );
            })}
          </div>
          <div className="relative container mx-auto mt-[5%]">
          <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
            {contactTab.slice(3, 5).map((x, index) => {
              return (
              <div key={index} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={x.pic} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{x.title}</h2>
                    <p>{x.desription}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">More Details</button>
                    </div>
                </div>
              </div>
              );
            })}
        </div>
      </div>
    </div>
    </div>
      <p className="text-4xl text-bold mt-15rem font-Aleo font-bold p-8">Trustees</p>
    <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap mt-15rem">
    <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={pic6} alt="Album" className='w-[70%]'/></figure>
  <div className="card-body font-Aleo">
    <h2 className="card-title">Mr. S. T. Bhatevara Chairman, Foundation Trustee</h2>
    <p>BE (ELECTICAL) </p>
     <p> FOUNDER OF SEVERAL MANUFACTURING COMPANIES</p>
     <p> 1.PAINTS INDUSTRY</p>
     <p> 2.HEATING ELEMENTS</p>
     <p> 3.ENGINE DIVISION </p>
  </div>
</div>
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={pic7} className='w-[70%]' alt="Album h-50% w-50%"/></figure>
  <div className="card-body font-Aleo">
    <h2 className="card-title">Rosy Bhatevara, Managing Trustee</h2>
    <p>B.COM (Rank Holder In Pune University.)</p>
    <p>Cost  Accountant (Inst. Of Cost Accountants Of India ) </p>
    <p>Director- M/s Super Paints Pvt. Ltd.</p>
    <p>ERP Consultant to Several Companies</p>
    <p>Visiting Faculty to many Management Institutes.</p>
  </div>
</div>
</div>
<div>
<div className='flex justify-center font-Aleo text-4xl mt-[3rem] font-bold'>Meet our Alumni</div>
<div className="mt-[3rem] flex justify-center">
<SimpleImageSlider
        width="75%"
        height="50%"
        images={stories}
        showBullets={true}
        showNavs={true}
        className=""
      />
</div>
</div>
<div className="card lg:card-side bg-base-100 shadow-xl flex justify-center mt-[23rem]">
  <p>Copyright ©️ 2023 St.Bhatevara India. All Rights Reserved</p>
</div>
</div>
  );
}

export default Home;