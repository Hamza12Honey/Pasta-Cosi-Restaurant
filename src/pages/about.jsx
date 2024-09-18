import React from 'react';
import Header from '../components/header1';
import Footer from '../components/footer';
import Mypage from '../components/custom'; 
function About() {
  return (
    <>
      <div>
        <Header/>
        <Mypage/>
        <section id="about" className="about">
        <div className="container-fluid max-width-container">
          <div className="row">
            <div
              className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch"
            >
              <div className="content">
                <h3>Discover <strong>OUR HISTORY</strong></h3>
                <p>
                  Pasta Cosi is an Italian restaurant in Tunis, les Berges du
                  Lac I. Embark on a gastronomic journey around the flavors of
                  overseas. Our chef offers a variety of pastas, risottos but
                  also raclette.
                </p>
                <p className="fst-italic">WHAT you will taste at our place :</p>
                <ul>
                  <li>
                    <i className="bx bx-check-double"></i> Pasta with Parmigiano
                    (White Sauce & Red Sauce).
                  </li>
                  <li><i className="bx bx-check-double"></i> Risottos.</li>
                  <li><i className="bx bx-check-double"></i> Salads.</li>
                  <li><i className="bx bx-check-double"></i> Raclette.</li>
                </ul>
                <p>
                  Choose your pasta (Spaghetti, Penne, Farfalle, Tagliatelle)
                  and it is served after dipping in a wheel of parmigiano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Footer/>
      </div>
    </>
  );
}

export default About;
