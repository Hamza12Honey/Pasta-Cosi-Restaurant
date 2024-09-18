import React from 'react';
import Header from '../components/header1';
import Footer from '../components/footer';
import Mypage from '../components/custom';
import gallery1 from '../assets/img/gallery/gallery-1.jpg';
import gallery2 from '../assets/img/gallery/gallery-2.jpg';
import gallery3 from '../assets/img/gallery/gallery-3.jpg';
import gallery4 from '../assets/img/gallery/gallery-4.jpg';
import gallery5 from '../assets/img/gallery/gallery-5.jpg';
import gallery6 from '../assets/img/gallery/gallery-6.jpg';
import gallery7 from '../assets/img/gallery/gallery-7.jpg';
import gallery8 from '../assets/img/gallery/gallery-8.jpg';

function Restaurant() {
  return (
    <>
      <div>
        <Header />
        <Mypage/>
        <section id="gallery" className="gallery">
          <div className="container-fluid max-width-container">
            <div className="section-title">
              <h2>Some photos from <span>Our Restaurant</span></h2>
            </div>
            <div className="row g-2">
              {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8].map((image, index) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
                  <div className="gallery-item">
                    <a href={image}>
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Restaurant;
