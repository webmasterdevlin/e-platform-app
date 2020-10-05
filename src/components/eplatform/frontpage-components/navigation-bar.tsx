import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBarUserStatus from './navigation-bar-user-status';

function NavigationBar() {
  return (
    <>
      <header id="header-container">
        <div id="header">
          <div className="container">
            <div className="left-side">
              <div id="logo">
                <Link to={'/'}>
                  <img
                    src="../../assets/images/logo2.png"
                    data-sticky-logo="../../assets/images/logo.png"
                    alt="E Learning Logo"
                  />
                </Link>
              </div>
              <div className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
              <nav id="navigation" className="style-1">
                <ul id="responsive">
                  <li>
                    <a className="current">Home</a>
                  </li>
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>User Panel</a>
                    <ul>
                      <li>
                        <Link to={'/dashboard'}>Dashboard</Link>
                      </li>
                      <li>
                        <Link to={'/dashboard/inbox'}>Inbox</Link>
                      </li>
                      <li>
                        <Link to={'/dashboard/bookings'}>Bookings</Link>
                      </li>
                      <li>
                        <Link to={'/dashboard/wallet'}>Wallet</Link>
                      </li>
                      <li>
                        <Link to={'/dashboard/my-offerings'}>My Offerings</Link>
                      </li>
                      <li>
                        <Link to={'/dashboard/reviews'}>Reviews</Link>
                      </li>
                      <li>
                        <Link to={'/dashboard/bookmarks'}>Bookmarks</Link>
                      </li>
                      <li>
                        <Link to={'/dashboard/create-offerings'}>
                          Create Offering
                        </Link>
                      </li>
                      <li>
                        <Link to={'/dashboard/my-profile'}>My Profile</Link>
                      </li>
                      <li>
                        <Link to={'dashboard/invoice'}>Invoice</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Pages</a>
                    <div className="mega-menu mobile-styles three-columns">
                      <div className="mega-menu-section">
                        <ul>
                          <li className="mega-menu-headline">Pages #1</li>
                          <li>
                            <Link to={'/user-profile'}>
                              <i className="sl sl-icon-user" /> User Profile
                            </Link>
                          </li>
                          <li>
                            <Link to={'/booking'}>
                              <i className="sl sl-icon-check" /> Booking Page
                            </Link>
                          </li>
                          <li>
                            <Link to={'/create-offerings'}>
                              <i className="sl sl-icon-plus" /> Create Offerings
                            </Link>
                          </li>
                          <li>
                            <Link to={'/blog'}>
                              <i className="sl sl-icon-docs" /> Blog
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu-section">
                        <ul>
                          <li className="mega-menu-headline">Pages #2</li>
                          <li>
                            <Link to={'/contact'}>
                              <i className="sl sl-icon-envelope-open" /> Contact
                            </Link>
                          </li>
                          <li>
                            <Link to={'/coming-soon'}>
                              <i className="sl sl-icon-hourglass" /> Coming Soon
                            </Link>
                          </li>
                          <li>
                            <Link to={'/not-found'}>
                              <i className="sl sl-icon-close" /> 404 Page
                            </Link>
                          </li>
                          <li>
                            <Link to={'/lesson-filtering'}>
                              <i className="sl sl-icon-equalizer" /> Lesson
                              Filtering
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-menu-section">
                        <ul>
                          <li className="mega-menu-headline">Other</li>
                          <li>
                            <Link to={'/elements'}>
                              <i className="sl sl-icon-settings" /> Elements
                            </Link>
                          </li>
                          <li>
                            <Link to={'/pricing-tables'}>
                              <i className="sl sl-icon-tag" /> Pricing Tables
                            </Link>
                          </li>
                          <li>
                            <Link to={'/typography'}>
                              <i className="sl sl-icon-pencil" /> Typography
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="clearfix" />
            </div>
            <div className="right-side">
              <div className="header-widget">
                <NavigationBarUserStatus />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="clearfix" />
    </>
  );
}

export default NavigationBar;
