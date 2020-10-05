import React from 'react';

function MainSearchContainer() {
  return (
    <>
      <div
        className="main-search-container centered"
        style={{
          backgroundImage:
            'url(../../../assets/images/main-search-background-01.jpg)',
        }}
      >
        <div className="main-search-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>
                  Find Nearby
                  {/* Typed words can be configured in script settings at the bottom of this HTML file */}
                  <span className="typed-words" />
                </h2>
                <h4>Explore top-rated attractions, activities and more</h4>
                <div className="main-search-input">
                  <div className="main-search-input-item">
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                    />
                  </div>
                  <div className="main-search-input-item location">
                    <div id="autocomplete-container">
                      <input
                        id="autocomplete-input"
                        type="text"
                        placeholder="Location"
                      />
                    </div>
                    <a href="#">
                      <i className="fa fa-map-marker" />
                    </a>
                  </div>
                  <div className="main-search-input-item">
                    <select
                      data-placeholder="All Categories"
                      className="chosen-select"
                    >
                      <option>All Categories</option>
                      <option>Shops</option>
                      <option>Hotels</option>
                      <option>Restaurants</option>
                      <option>Fitness</option>
                      <option>Events</option>
                    </select>
                  </div>
                  <button
                    className="button"
                    onClick={() =>
                      (window.location.href =
                        'listings-half-screen-map-list.html')
                    }
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            {/* Features Categories */}
            <div className="row">
              <div className="col-md-12">
                <h5 className="highlighted-categories-headline">
                  Or browse featured categories:
                </h5>
                <div className="highlighted-categories">
                  {/* Box */}
                  <a
                    href="listings-list-with-sidebar.html"
                    className="highlighted-category"
                  >
                    <i className="im im-icon-Home" />
                    <h4>Apartments</h4>
                  </a>
                  {/* Box */}
                  <a
                    href="listings-list-full-width.html"
                    className="highlighted-category"
                  >
                    <i className="im im-icon-Hamburger" />
                    <h4>Eat &amp; Drink</h4>
                  </a>
                  {/* Box */}
                  <a
                    href="listings-half-screen-map-list.html"
                    className="highlighted-category"
                  >
                    <i className="im im-icon-Electric-Guitar" />
                    <h4>Events</h4>
                  </a>
                  {/* Box */}
                  <a
                    href="listings-half-screen-map-list.html"
                    className="highlighted-category"
                  >
                    <i className="im im-icon-Dumbbell" />
                    <h4>Fitness</h4>
                  </a>
                </div>
              </div>
            </div>
            {/* Featured Categories - End */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSearchContainer;
