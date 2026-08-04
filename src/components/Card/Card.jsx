import { Link } from "react-router";



export default function Card({product}) {
   
  return <>
  
    
      <div className="col-md-3">
        <div className="inner rounded-5 ">
          <div className="img position-relative rounded-5">
            <img src={`https://image.tmdb.org/t/p/w500${product.poster_path}`} className="w-100 " alt="image" />
            <div className="staricon  rounded-4 py-1 px-2 position-absolute ">
              <i className="bi bi-star-fill text-warning"></i> <span className="text-white">{product.vote_average===0?product.vote_average:product.vote_average.toFixed(1)}</span>
            </div>
             <div className="movicon  rounded-4 py-1 px-2 position-absolute ">
              <i className="bi bi-film text-white"></i> <span className="text-white">movie</span>
            </div>
            <div className="imglayer d-flex justify-content-center align-items-center">
              <div className="content d-flex flex-column align-items-center gap-4 ">
                <div className="playicon d-flex justify-content-center align-items-center">
                  <i className="bi bi-play-fill text-white fs-2"></i>
                 
                </div>
                 <div className="d-flex justify-content-center align-items-center gap-2">
                     <div className="imgicons">
                      <i className="bi bi-heart text-white"></i>
                    </div>
                    <div className="imgicons">
                      <i className="bi bi-bookmark text-white"></i>
                    </div>
                    <Link to={`movie/${product.id}`} className="imgicons">
                      <i className="bi bi-info-circle text-white"></i>
                    </Link >
                   
                  </div>

              </div>
            </div>
          </div>
          <div className="content p-3">
            <h4 className="text-truncate ptitle">{product.title}</h4>
            <div className="icons">
              <i className="bi bi-calendar3 cardicon"></i> <span className="text-secondary">{ new Date(product.release_date).getFullYear()}</span>
              <i className="bi bi-globe cardicon ms-2"></i> <span className="text-secondary">{product.original_language}</span>
            </div>
            <p className=" text-secondary line-clamp-2">{product.overview}</p>
          </div>
        </div>
      </div>
    
  
  
  
  
  
  </>
}
