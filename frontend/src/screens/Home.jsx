import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const Home = () => {
  const [foodcat, setFoodcat] = useState([]);
  const [fooditem, setFooditem] = useState([]);
  const [search, setsearch] = useState("");
  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFooditem(response[0]);
    setFoodcat(response[1]);
  };

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ objectFit: "contain", maxHeight: "500px" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/pizza.jpg"
                className="d-block w-100"
                alt="..."
                style={{
                  filter: "brightness(30%)",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/burger.png"
                className="d-block w-100"
                alt="..."
                style={{
                  filter: "brightness(30%)",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="/pastry.jpg"
                className="d-block w-100"
                alt="..."
                style={{
                  filter: "brightness(30%)",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="carousel-caption d-none d-md-block">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ zIndex: "30" }}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
                  style={{ width: "600px" }}
                />
                <button
                  className="btn btn-outline-success text-white"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div
  className=" row mb-3 justify-content-center align-items-center"
  style={{ width: "100%" }}>
    {foodcat.length > 0
          ? foodcat.map((data) => {
              return (
                <div key={data._id}>
                  <div className="fs-3 m-3 d-flex justify-content-center">{data.CategoryName}</div>
                  <hr />
                  <div className="d-flex flex-wrap ">
                  {fooditem.length > 0 ? (
                    fooditem
                      .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                      .map((filteritems) => {
                        return (
                          <div
                            key={filteritems._id}
                            className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center"
                          >
                            <Card
                              foodname={filteritems.name}
                              options={filteritems.options[0]}
                              imgSrc={filteritems.img}
                              
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>No Such Data Found</div>
                  )}
                  </div>
                </div>
              );
            })
          : ""}
      </div>

      <Footer />
    </>
  );
};

export default Home;
