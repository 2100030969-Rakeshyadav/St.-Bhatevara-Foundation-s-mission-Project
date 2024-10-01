import { useState } from "react";
import axios from "axios";
import Alumni_img1 from '../../Assets/Alumni_img1.jpg';
import Alumni_img2 from '../../Assets/Alumni_img2.jpg';

const Alumni = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const NameChangeHandler = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const EmailChangeHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const MessageChangeHandler = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert("Submitted");
      await axios.post("http://localhost:8000/api/v1/users/register", {
        name: name,
        email: email,
        message: message,
      });
    } catch (e) {
      console.log("Error sending frontEnd data to backend using POST API : ", e);
    }
  };

  const formTab = [
    {
      title: "Name",
      placeholder: "Enter Your name",
      type: "text",
      onChange: NameChangeHandler,
    },
    {
      title: "Email",
      placeholder: "Enter Your Email-ID",
      type: "text",
      onChange: EmailChangeHandler,
    },
    {
      title: "Message",
      placeholder: "Enter Your Message",
      type: "textarea",
      onChange: MessageChangeHandler,
    },
  ];

  const contactTab = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      contact: "+91 1234567890",
      pic: Alumni_img1,
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      contact: "+91 9876543210",
      pic: Alumni_img2,
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col mx-auto bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center mt-8">
          <p className="font-Rajdhani text-5xl font-bold">Contact Me</p>
        </div>
        <div className="py-6">
          <div className="container mx-auto mt-0">
            <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap">
              {contactTab.map((alumni, index) => {
                return (
                  <div key={index} className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img src={alumni.pic} alt="Profile" className="w-full h-auto" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Name: {alumni.name}</h2>
                      <p>Email: {alumni.email}</p>
                      <p>Contact: {alumni.contact}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <div className="flex justify-center items-center h-full">
          <div className="container mx-auto flex flex-wrap shadow-2xl rounded-md p-5">
            <div className="lg:[100%] w-full p-4">
              <form className="shadow-lg rounded-md px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="flex flex-col items-center">
                  {formTab.map((x, index) => {
                    return (
                      <div key={index} className="form-control w-full max-w-xs mb-4">
                        <label className="label">
                          <span className="label-text">{x.title}</span>
                        </label>
                        {x.type === "textarea" ? (
                          <textarea
                            rows="10"
                            cols="50"
                            placeholder={x.placeholder}
                            className="input input-bordered w-full p-2"
                            onChange={x.onChange}
                          />
                        ) : (
                          <input
                            type={x.type}
                            placeholder={x.placeholder}
                            className="input input-bordered w-full p-2"
                            onChange={x.onChange}
                          />
                        )}
                      </div>
                    );
                  })}
                  <div className="w-full max-w-xs mb-4">
                    <button className="btn rounded-full w-full max-w-xs" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Alumni;
