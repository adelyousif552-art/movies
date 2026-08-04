import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Signup from "./Pages/Signup/Signup"
import Notfound from "./Pages/Notfound/Notfound"
import { Bounce, ToastContainer } from "react-toastify"
import MovieDetails from "./Pages/Detailspage/Details"

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/movie/:id" element={<MovieDetails/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    
    </BrowserRouter>
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>


   




    </>
  )
}

export default App
