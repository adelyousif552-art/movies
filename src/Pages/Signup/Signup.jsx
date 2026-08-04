import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function Signup() {
  const navigate=useNavigate()
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [phone,setphone]=useState('')
  const [password,setpassword]=useState('')
  const [rePassword,setrepassword]=useState('')

  async function handlesubmit(e){
    e.preventDefault()
    const values={
      name,
      email,
      password,
      rePassword,
      phone
    }
   const response=await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup",
    {

      method:"POST",
      headers:{
        "Content-Type":"application/json"

      },
      body:JSON.stringify(values)
    }
   )
   const data=await response.json()
   if(data.message==="success"){
    toast.success("signed up successffuly")
    setTimeout(() => {
    navigate('/login')
    
   }, 3000);
   }
   
   
    
  }
  return <>
  <Navbar/>
  <div className="signuppage d-flex justify-content-center align-content-center">
    <div className="signform shadow-lg  p-5">
      <div className="d-flex flex-column  align-items-center">
        <div className="signicons rounded-circle d-flex justify-content-center align-items-center">
        <i className="bi bi-person-fill-add text-white fs-1"></i>
      </div>
      <div className="text-center">
        <h1 className="text-white">Create Account</h1>
      <p className=" text-secondary">Join MovieHub and explore endless entertainment

</p>
      </div>
      </div>
      <div className="inputs">
        <form onSubmit={handlesubmit}>
          <div className="form-floating mb-3">
  <input type="text" className="form-control" id="name" placeholder="name@example.com" value={name} onChange={(e)=>{
    setname(e.target.value)
  }}/>
  <label htmlFor="fname" className=" text-secondary">Full Name</label>
</div>
<div className="form-floating mb-3">
  <input type="email" className="form-control" id="email" placeholder="Password" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
  <label htmlFor="email" className="text-secondary">Email Address</label>
</div>
<div className="form-floating mb-3">
  <input type="tel" className="form-control" id="phone" placeholder="Password" value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
  <label htmlFor="phone" className="text-secondary">Phone Number</label>
</div>
<div className="form-floating mb-3">
  <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
  <label htmlFor="password" className="text-secondary">Password</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="confirmpass" placeholder="Password" value={rePassword} onChange={(e)=>{setrepassword(e.target.value)}}/>
  <label htmlFor="confirmpass" className="text-secondary">Confirm Password</label>
</div>
<div className="buttons text-center mt-3">
  <button className="button p-3 rounded-5 text-white ">Create Account</button>
</div>
        </form>
      </div>

    </div>
  </div>
  
    
    <Footer/>
    </>
}
