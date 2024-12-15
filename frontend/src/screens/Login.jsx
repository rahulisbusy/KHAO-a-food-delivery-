import { useState } from "react"
import React from 'react'
import { Link,useNavigate } from "react-router-dom"

const Login = () => {
  let navigate=useNavigate();
  const [cred, setcred] = useState({email:"",password:""})
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response=await fetch("http://localhost:5000/api/loginuser",{
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
   if(json.success){
    localStorage.setItem("authToken",json.authToken);
    console.log(localStorage.getItem("authToken"));
    navigate("/");
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
       

        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to="/signup" className="m-3 btn btn-danger">
          I'm a new user
        </Link>
      </form>
    </div>
  </>
  )
}

export default Login