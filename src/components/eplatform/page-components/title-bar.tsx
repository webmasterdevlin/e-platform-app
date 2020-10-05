import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
};

const TitleBar: React.FC<Props> = ({ title }) => (
  <>
    {/* Titlebar================================================== */}
    <div id="titlebar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>{title}</h2>
            {/* Breadcrumbs */}
            <nav id="breadcrumbs">
              <ul>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>{title}</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default TitleBar;
