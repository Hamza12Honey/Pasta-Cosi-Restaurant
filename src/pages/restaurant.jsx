import React from 'react';
import Header from '../components/header1';
import Footer from '../components/footer';
import slide1 from '../assets/img/slide/slide-1.jpg';
import slide2 from '../assets/img/slide/slide-2.jpg';
import slide3 from '../assets/img/slide/slide-3.jpg';

function Resturant() {
  return (
    <div>
      <Header />
      <section id="hero">
        <div className="hero-container max-width-container">
          <div
            id="heroCarousel"
            data-bs-interval="5000"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{ backgroundImage: `url(${slide1})` }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">
                      <span>Pasta Cosi</span> Restaurant
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Home Of The Best <strong> Italian </strong> Pasta Cosi.
                    </p>
                    <div>
                      <a href="menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{ backgroundImage: `url(${slide2})` }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">
                      Our Spirit<span> !</span>
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Break from the ordinary and escape to
                      <strong>Pasta Cosi</strong>, your personal slice of
                      paradise! <strong>Pasta Cosi</strong> is open seven days a
                      week, for in- person service as well as takeout and
                      delivery.
                    </p>
                    <div>
                      <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                      <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{ backgroundImage: `url(${slide3})` }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">
                      Specialty <span>!</span>
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Find The Perfect Pasta Recipe.
                    </p>
                    <div>
                      <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                      <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Resturant;
