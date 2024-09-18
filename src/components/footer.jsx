import React from 'react';

function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <h3>Pasta Cosi</h3>
          <p>
            Pasta Cosi is specialized in Pasta with Parmigiano, Risotto, Salads & Raclette
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/pastacositn/" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/pastacositn/" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
          <div className="copyright">
            &copy; Copyright <strong><span>Pasta Cosi</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://github.com/Hamza12Honey" target="_blank">Alpha Core</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
