import React, { useState } from 'react'
import './CSS/Login.css'

const Login = () => {

  const [state,setState] = useState("LOGIN");
  const [formData,setFormData] = useState({
    name:"",
    password:"",
    email:""
  })

  const changehandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const login = async()=>{
    let resposneData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    }).then((resp)=>resp.json()).then((data)=>{resposneData=data})

    if(resposneData.success){
      localStorage.setItem('auth-token',resposneData.token);
      window.location.replace("/");
    }
    else{
      alert(resposneData.errors);
    }
  }
  
  const signup = async ()=>{
    let resposneData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    }).then((resp)=>resp.json()).then((data)=>{resposneData=data})

    if(resposneData.success){
      localStorage.setItem('auth-token',resposneData.token);
      window.location.replace("/");
    }
    else{
      alert(resposneData.errors);
    }
  }
  

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-feilds">
            {state==="SIGN UP"?<input name='name' value={formData.name} onChange={changehandler} type="text" placeholder='Your Name'/>:<></>}
            <input name='email' onChange={changehandler} value={formData.email} type="email" placeholder='Email Id' />
            <input name='password' onChange={changehandler} value={formData.password} type="password" placeholder='Password' />
          </div>
          <button onClick={()=>{state==="LOGIN"?login():signup()}}>Continue</button>
          {state==="SIGN UP"?<p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("LOGIN")}}>Login here</span></p>:
          <p className='loginsignup-login'>Create an account? <span onClick={()=>{setState("SIGN UP")}}>Click here</span></p>}
          <div className="loginsignup-agree">
            <input type="checkbox"  />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
      </div>
    </div>
  )
}

export default Login
