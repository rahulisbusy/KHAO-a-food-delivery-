import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [cred, setcred] = useState({name:"",email:"",password:"",location:""})
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response=await fetch("http://localhost:5000/api/createuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(cred)

    });
   const json=await response.json();
   console.log(json);
   if(!json.success){
    alert("Enter valid credentials")
   }
   
   }
  const onChange=(e)=>{
   setcred({...cred,[e.target.name]:e.target.value})
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handlesubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={cred.name}
              aria-describedby="emailHelp"
              placeholder="Enter your name"
               onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={cred.email}
              aria-describedby="emailHelp"
              placeholder="Enter email" onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={cred.password} onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"> Address</label>
            <input
              
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Your address"
              name="location"
              value={cred.location} onChange={onChange}
            />
          </div>

          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user?
          </Link>
        </form>
      </div>
    </>
  );
};


export default Signup;
