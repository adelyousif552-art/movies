import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

export default function Home() {
  const [movies,setmovies]=useState(null)
   async function getmovies(){
        const response=await fetch("//api.themoviedb.org/3/trending/movie/week?api_key=55c22de81b8dc600015494c69d72f9f6")
        const data=await response.json()
       
        
       setmovies(data.results)
        
    }
    useEffect(()=>{
        getmovies()

    },[])
  return <>
  <div className="home">
    <Navbar/>
    <div className=" px-5   my-5">
     <div className="d-flex align-items-center header position-relative">
       <i className="bi bi-fire text-danger fs-2"></i> 
      <h1 className="text-white">Trending Movies</h1>
     </div>
      <div>
      <p className="text-secondary">Most popular movies this week</p>
    </div>
    </div>
    
  <div className="container">
    <div className="row g-5">
      {movies!==null?movies.map((movie)=><Card key={movie.id} product={movie}/>):<section className="home py-5">
  <div className="container">

    {/* Hero */}

    <div className="hero-loading shimmer rounded-4 mb-5"></div>

    <div className="row g-4">

      {Array.from({ length: 12 }).map((_, index) => (
        <div className="col-lg-3 col-md-4 col-sm-6" key={index}>

          <div className="inner p-3 rounded-4">

            <div className="poster-loading shimmer rounded-3 mb-3"></div>

            <div className="title-loading shimmer mb-2"></div>

            <div className="text-loading shimmer mb-2"></div>

            <div className="text-loading short shimmer mb-3"></div>

            <div className="d-flex justify-content-between">

              <div className="small-loading shimmer"></div>

              <div className="small-loading shimmer"></div>

            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>}
    </div>
  </div>


  
  <Footer/>
  
  </div>
  
  </>
}
