import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      {/* Footer================================================== */}
      <div id="footer">
        {/* Main */}
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-6">
              <img
                className="footer-logo"
                src="../../assets/images/logo.png"
                alt=""
              />
              <br />
              <br />
              <p>
                Morbi convallis bibendum urna ut viverra. Maecenas quis
                consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi
                ultricies laoreet ullamcorper phasellus semper.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 ">
              <h4>Helpful Links</h4>
              <ul className="footer-links">
                <li>
                  <Link to={'/'}>Login</Link>
                </li>
                <li>
                  <Link to={'/'}>Sign Up</Link>
                </li>
                <li>
                  <Link to={'dashboard'}>My Account</Link>
                </li>
                <li>
                  <Link to={'dashboard-add-listing'}>Add Listing</Link>
                </li>
                <li>
                  <Link to={'pricing'}>Pricing</Link>
                </li>
                <li>
                  <Link to={'privacy-policy'}>Privacy Policy</Link>
                </li>
              </ul>
              <ul className="footer-links">
                <li>
                  <Link to={'faq'}>FAQ</Link>
                </li>
                <li>
                  <Link to={'blog'}>Blog</Link>
                </li>
                <li>
                  <Link to={'our-partners'}>Our Partners</Link>
                </li>
                <li>
                  <Link to={'how-it-works'}>How It Works</Link>
                </li>
                <li>
                  <Link to={'contact'}>Contact</Link>
                </li>
              </ul>
              <div className="clearfix" />
            </div>
            <div className="col-md-3  col-sm-12">
              <h4>Contact Us</h4>
              <div className="text-widget">
                <span>12345 Little Lonsdale St, Melbourne</span> <br />
                Phone: <span>(123) 123-456 </span>
                <br />
                E-Mail:
                <span>
                  {' '}
                  <Link to={'email:office@example.com'}>
                    office@example.com
                  </Link>{' '}
                </span>
                <br />
              </div>
              <ul className="social-icons margin-top-20">
                <li>
                  <a className="facebook">
                    <i className="icon-facebook" />
                  </a>
                </li>
                <li>
                  <a className="twitter">
                    <i className="icon-twitter" />
                  </a>
                </li>
                <li>
                  <a className="gplus">
                    <i className="icon-gplus" />
                  </a>
                </li>
                <li>
                  <a className="vimeo">
                    <i className="icon-vimeo" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Copyright */}
          <div className="row">
            <div className="col-md-12">
              <div className="copyrights">
                © 2019 Listeo. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer / End */}
      <div id="backtotop">
        <a
          role="button"
          onClick={() =>
            window.scrollTo({ top: 100, left: 100, behavior: 'smooth' })
          }
        />
      </div>
    </>
  );
}

export default Footer;
