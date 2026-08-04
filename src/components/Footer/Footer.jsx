
export default function Footer() {
  return <>
  <div className="footer p-5 ">
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="firstcolumn  d-flex flex-column gap-3">
      <div className="d-flex align-items-center gap-2">
         <span><i className="bi bi-film fs-3 movicon "></i></span> <h5 className="mov-text m-0 fs-4">  MovieHub</h5>
      </div>
        <p className="text-white">Your ultimate destination for discovering movies, TV shows,<br/> and trending entertainment. Explore, watch, and enjoy the<br/> best content from around the world.</p>
        <div className="icons d-flex align-items-center gap-3">
            <div className="icon  rounded-circle d-flex align-items-center justify-content-center ">
                <i className="bi bi-facebook"></i>

            </div>
            <div className="icon  rounded-circle d-flex align-items-center justify-content-center ">
                <i className="bi bi-twitter-x"></i>

            </div>
            <div className="icon  rounded-circle d-flex align-items-center justify-content-center ">
                <i className="bi bi-instagram"></i>

            </div>
            <div className="icon  rounded-circle d-flex align-items-center justify-content-center ">
                <i className="bi bi-youtube"></i>

            </div>
        </div>

    </div>
   
    
            </div>
             <div className="col-md-3">
                <div className="secondcolumn  d-flex flex-column gap-3">
        <h4 className="text-white footerlinks position-relative">Quick Links</h4>
        <ul className="text-white list-unstyled d-flex flex-column gap-2">
            <div className="d-flex align-items-center gap-1 animate-right">
                <i className="bi bi-arrow-right arr-right"></i>
                <li className="">Home</li>
            </div>
             <div className="d-flex align-items-center gap-1 animate-right">
                <i className="bi bi-arrow-right arr-right"></i>
                <li className="">Movies</li>
            </div>
             <div className="d-flex align-items-center gap-1 animate-right">
                <i className="bi bi-arrow-right arr-right"></i>
                <li className="">Tv Shows</li>
            </div>
             <div className="d-flex align-items-center gap-1 animate-right">
                <i className="bi bi-arrow-right arr-right"></i>
                <li className="">Trending</li>
            </div>
             
        </ul>
    </div>
   
    
            </div>
              <div className="col-md-3">
                 <div className="thirdcolumn d-flex  flex-column gap-3">
        <h4 className="text-white footerlinks position-relative">Categories</h4>
        <ul className="text-white list-unstyled d-flex flex-column gap-2">
            <div className="d-flex align-items-center gap-1 animate-right">
                <i className="bi bi-arrow-right arr-right"></i>
                <li className="">Action</li>
            </div>
             <div className="d-flex align-items-center gap-1 animate-right">
                <i className="bi bi-arrow-right arr-right"></i>
                <li className="">Comedy</li>
            </div>
             <div className="d-flex align-items-center gap-1 animate-right">
                <i className="bi bi-arrow-right arr-right"></i>
                <li className="">Drama</li>
            </div>
             <div className="d-flex align-items-center gap-1 animate-right">
                <i className="bi bi-arrow-right arr-right"></i>
                <li className="">Horror</li>
            </div>
             
        </ul>
    </div>
   
    
            </div>
             <div className="col-md-3">
                
     <div className="fourthcolumn d-flex flex-column gap-3  ">
        <h4 className="text-white footerlinks position-relative">Contact Us</h4>
        <ul className="text-white list-unstyled d-flex flex-column gap-3 ">
            <li className="contact-icons  ">
                <i className="bi bi-geo-alt-fill "></i>
                <span className="mx-2">123 Movie Street, Hollywood, CA 90028</span>
            </li>
             <li className="contact-icons  ">
                <i className="bi bi-envelope-fill"></i>
                <span className="mx-2">support@moviehub.com</span>
            </li>
             <li className="contact-icons  ">
                <i className="bi bi-telephone-fill"></i>
                <span className="mx-2">+1 (555) 123-4567</span>
            </li>
            <li>
                Subscribe to Newsletter
            </li>
            <li>
                <input type="email" placeholder="Enter your email" className="form-control"/>
            </li>
             
        </ul>
    </div>
   
    
            </div>
        </div>
    </div>
  </div>
  
  
  </>
}
