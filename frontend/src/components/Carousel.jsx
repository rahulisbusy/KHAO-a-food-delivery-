import React from "react";

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain", maxHeight:"500px"}}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/pizza.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(30%)", maxHeight:"500px", objectFit:"cover"}}/>
        </div>
        <div className="carousel-item">
          <img src="/burger.png" className="d-block w-100" alt="..." style={{filter:"brightness(30%)", maxHeight:"500px", objectFit:"cover"}}/>
        </div>
        <div className="carousel-item">
          <img src="/pastry.jpg" className="d-block w-100" alt="..." style={{filter:"brightness(30%)", maxHeight:"500px", objectFit:"cover"}}/>
        </div>
        <div className="carousel-caption d-none d-md-block">
  <form className="d-flex justify-content-center align-items-center" style={{zIndex: "30"}}>
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "600px" }} />
    <button className="btn btn-outline-success text-white" type="submit">Search</button>
  </form>
</div>

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
