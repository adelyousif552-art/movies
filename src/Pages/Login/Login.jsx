import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";


export default function Login() {
  const navigate=useNavigate()
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  async function handlelogin(e){
    e.preventDefault()
    const values={
      email,
      password
    }
    const response= await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(values)

    })
    const data=await response.json()
    if(data.message==="success"){
      toast.success("signed in succesffully");

    }
    setTimeout(() => {
      navigate('/')
    }, 3000);
    
  }

  return <>
  <Navbar/>
   <div className="signuppage d-flex justify-content-center align-content-center">
    <div className="signform shadow-lg  p-5">
      <div className="d-flex flex-column  align-items-center">
        <div className="signicons rounded-circle d-flex justify-content-center align-items-center">
         <i className="bi bi-box-arrow-in-right text-white fs-2"></i>
      </div>
      <div className="text-center">
        <h1 className="text-white">Welcome Back</h1>
      <p className=" text-secondary">Sign in to continue to MovieHub

</p>
      </div>
      </div>
      <div className="inputs">
        <form onSubmit={handlelogin}>
         
<div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingPassword" placeholder="Password" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
  <label htmlFor="floatingPassword" className="text-secondary">Email Address</label>
</div>

<div className="form-floating mb-3">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
  <label htmlFor="floatingPassword" className="text-secondary">Password</label>
</div>

<div className="buttons text-center mt-3">
  <button className="button p-3 rounded-5 text-white ">Sign in</button>
</div>
        </form>
      </div>

    </div>
  </div>
  <Footer/>

  </>
}
