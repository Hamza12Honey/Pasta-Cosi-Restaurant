import React from 'react';
import Header from '../components/header1';
import Footer from '../components/footer';
import Mypage from '../components/custom';

const Contact = () => {
  return (
    <>
      <div>
    <Header/>
    <Mypage/>
    <section id="contact" className="contact">
      <div className="container max-width-container">
        <div className="section-title">
          <h2><span>Contact</span> Us</h2>
          <p>Show Our Location Map.</p>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1596.7145493735677!2d10.229448658237272!3d36.83219814181207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3592f6b307ef%3A0x51300af62a745953!2sPasta%20Cosi!5e0!3m2!1sfr!2stn!4v1652455428154!5m2!1sfr!2stn"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="container mt-5 max-width-container">
        <div className="info-wrap">
          <div className="row">
            <div className="col-lg-3 col-md-6 info">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>Lake Constance Street<br />1053 Tunis, Tunisia</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-clock"></i>
              <h4>Open Hours:</h4>
              <p>Monday-Thursday:<br />12:00 AM - 23:00 PM</p>
              <p>Friday-Sunday:<br />12:00 AM - 00:00 PM</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>pastacosi@example.com</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>(+216) 53 283 233</p>
            </div>
          </div>
        </div>

        <form role="form" className="email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="reset">Send Message</button>
          </div>
        </form>
      </div>
    </section>
    <Footer/>
      </div>
    </>
  );
};

export default Contact;
