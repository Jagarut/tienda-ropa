import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div>
      <div className="homepage">
        <div className="directory-menu">
          <Directory />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
