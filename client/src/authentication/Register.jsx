import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Register = () => {
  
  const[name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")

  const navigate=useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(res=>{
      console.log(res)
      navigate('/login')
    })
    .catch(err=>console.log(err));
    console.log("hi")
  }

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login" style={{fontWeight:"600"}}>Login</Link></p>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "auto",
    marginTop: "25vh",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    textAlign: "center",
    fontFamily: "sans-serif"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px"
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px"
  },
  button: {
    padding: "10px",
    backgroundColor: "#28A745",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default Register;
