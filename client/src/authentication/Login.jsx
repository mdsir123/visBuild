import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = ({setIsLoggedIn}) => {
  
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")

  const navigate=useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(res=>{
      console.log(res)
      if(res.data==="Success"){
        setIsLoggedIn(true)
      }
      else if(res.data==="Incorrect password"){
        alert("Incorrect password")
      }
      else{
        alert("No such user exists")
      }
      
  })
    .catch(err=>console.log(err));
    console.log("hi")
  }

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
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
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p>Don't have an account? <Link style={{fontWeight:"600"}} to="/register">Register</Link></p>
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

export default Login;
