import { useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function MovieDetails() {
  const [details,setdetails]=useState(null)
  
  const {id}=useParams()
  async function getdetails(){
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=55c22de81b8dc600015494c69d72f9f6`)
        const data = await response.json()
        
        if(data.success === false){
            toast.error(data.status_message || "Movie not found")
            return   
        }
        
        setdetails(data)
    } catch (error) {
        toast.error("something went wrong")
        console.log(error)
    }
}
  useEffect(()=>{
    getdetails()
  },[])
  const score=Math.round(details?.vote_average * 10)
  return <>
    <Navbar/>
   {details!==null? <section className="movie-page text-white py-5">
      <div className="container">

        
        <div className="row g-5 align-items-center">

          <div className="col-lg-3 imagepost">
            <img
              src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
              className="img-fluid rounded-4 shadow"
              alt="movie"
            />
          </div>

          <div className="col-lg-9">

            <h1 className="fw-bold display-5">{details.original_title}</h1>

            <p className="text-danger fst-italic">
              {details.tagline}
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4 text-secondary">

              <span>
                <i className="bi bi-calendar3 me-2"></i>
                {new Date(details.release_date).getFullYear()}
              </span>

              <span>
                <i className="bi bi-clock me-2"></i>
                {details.runtime} min
              </span>

              <span className="badge bg-success">
                {details.status}
              </span>

            </div>
            <div className="d-flex flex-wrap gap-2 mb-4">

    {details.genres.map((genre)=><span className="badge genres border border-danger  rounded-pill px-3 py-2">
        {genre.name}
    </span>)}


</div>

            <div className="info-box p-4 rounded-4 mb-4">

              <div className="row text-center align-items-center">

                <div className="col-md-4">

                  <div className="score-circle" style={{background:`conic-gradient(
                     #E94560 ${score}%,
      #2c2c3e ${score}%
                    )`}}>
                    {details.vote_average.toFixed(1)}
                  </div>

                  <small className="text-secondary">
                    User Score
                  </small>

                </div>

                <div className="col-md-4">

                  <h4>{details.vote_count}</h4>

                  <small className="text-secondary">
                    Votes
                  </small>

                </div>

                <div className="col-md-4">

                  <h4>{details.popularity.toFixed(1)}K</h4>

                  <small className="text-secondary">
                    Popularity
                  </small>

                </div>

              </div>

            </div>

            <div className="d-flex flex-wrap gap-3">

              <button className="btn trailer-btn">

                <i className="bi bi-play-fill me-2"></i>

                Watch Trailer

              </button>

              <button className="btn fav-btn">

                <i className="bi bi-heart me-2"></i>

                Add to Favorites

              </button>

              <button className="btn icon-btn">

                <i className="bi bi-share"></i>

              </button>

            </div>

          </div>

        </div>

        

        <div className="row mt-5 g-4">

          <div className="col-lg-8">

            
            <div className="movie-card">

              <h5>

                <i className="bi bi-file-text me-2 text-danger"></i>

                Overview

              </h5>

              <hr />

              <p className="text-secondary">

                {details.overview}

              </p>

            </div>

            

            <div className="movie-card mt-4">

              <h5>

                <i className="bi bi-camera-reels me-2 text-danger"></i>

                Movie Details

              </h5>

              <hr />

              <div className="row">

                <div className="col-md-6">

                  <p><strong>Release:</strong>{new Date(details.release_date).toDateString()}</p>

                  <p><strong>Runtime:</strong> {details.runtime} min</p>

                  <p><strong>Language:</strong> English</p>

                </div>

                <div className="col-md-6">

                  <p><strong>Budget:</strong> ${details.budget}</p>

                  <p><strong>Revenue:</strong> ${details.revenue}</p>

                  <p><strong>Status:</strong> {details.status}</p>

                </div>

              </div>

            </div>

           

           <div className="movie-card mt-4">

    <h5>

        <i className="bi bi-translate me-2 text-danger"></i>

        Spoken Languages

    </h5>

    <hr />

   {details.spoken_languages.map((lang)=>{
        return  <span className="badge bg-dark border me-2">
       {lang.name}
    </span>
       })}

</div>

          </div>

         

          <div className="col-lg-4">

            {details.belongs_to_collection?<div className="movie-card">

              <h5>

                <i className="bi bi-collection me-2 text-danger"></i>

                Collection

              </h5>

              <hr />

              <div className="d-flex gap-3 align-items-center">

                <img
                  src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                  width="70"
                  className="rounded"
                  alt=""
                />

                <div>

                  <h6>{details.belongs_to_collection.name}</h6>

                  <button className="btn trailer-btn btn-sm">
                    View Collection
                  </button>

                </div>

              </div>

            </div>:''}
            

          <div className="movie-card mt-4">

    <h5>

        <i className="bi bi-building me-2 text-danger"></i>

        Production

    </h5>

    <hr />

    {details.production_companies.map((p)=><div className="d-flex align-items-center gap-3 mb-3">

        <img
            src={`https://image.tmdb.org/t/p/w500${p.logo_path}`}
            width="55"
            alt=""
        />

        <div>

            <h6 className="mb-0">
                {p.name}
            </h6>

            <small className="text-secondary">
               {p.origin_country}
            </small>

        </div>

    </div>)}

   

</div>

            <div className="movie-card mt-4">

              <h5>

                <i className="bi bi-link-45deg me-2 text-danger"></i>

                External Links

              </h5>

              <hr />

              <button className="btn btn-dark w-100 mb-2">

                <i className="bi bi-globe me-2"></i>

                Official Website

              </button>

              <a href={`https://www.imdb.com/title/${details.imdb_id}`} className="btn btn-dark w-100">

                <i className="bi bi-film me-2"></i>

                IMDB

              </a>

            </div>

          </div>

        </div>

      </div>
    </section>:<section className="movie-page py-5">
  <div className="container">

    <div className="row g-5 align-items-center">

      <div className="col-lg-3">
        <div className="loading-poster shimmer rounded-4"></div>
      </div>

      <div className="col-lg-9">

        <div className="loading-title shimmer mb-3"></div>

        <div className="loading-tagline shimmer mb-4"></div>

        <div className="d-flex gap-3 mb-4">

          <div className="loading-badge shimmer"></div>
          <div className="loading-badge shimmer"></div>
          <div className="loading-badge shimmer"></div>

        </div>

        <div className="loading-box shimmer rounded-4 mb-4"></div>

        <div className="d-flex gap-3">

          <div className="loading-btn shimmer"></div>
          <div className="loading-btn shimmer"></div>
          <div className="loading-icon shimmer rounded-circle"></div>

        </div>

      </div>

    </div>

    <div className="row mt-5 g-4">

      <div className="col-lg-8">

        <div className="movie-card">

          <div className="loading-subtitle shimmer mb-4"></div>

          <div className="loading-line shimmer"></div>
          <div className="loading-line shimmer"></div>
          <div className="loading-line short shimmer"></div>

        </div>

        <div className="movie-card mt-4">

          <div className="loading-subtitle shimmer mb-4"></div>

          <div className="loading-line shimmer"></div>
          <div className="loading-line shimmer"></div>
          <div className="loading-line shimmer"></div>

        </div>

      </div>

      <div className="col-lg-4">

        <div className="movie-card">

          <div className="loading-subtitle shimmer mb-4"></div>

          <div className="loading-line shimmer"></div>
          <div className="loading-line short shimmer"></div>

        </div>

        <div className="movie-card mt-4">

          <div className="loading-subtitle shimmer mb-4"></div>

          <div className="loading-line shimmer"></div>
          <div className="loading-line shimmer"></div>

        </div>

      </div>

    </div>

  </div>
</section>}
    <Footer/>
  </>
}