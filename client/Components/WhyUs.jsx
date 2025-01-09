import React from "react";

import WhyUsDetails from "../Components/Data/WhyUs.json";

const WhyUs = () => {
  return (
    <div className="uni-whyus uk-section uk-section-xlarge@m uk-panel">
      <div className="uk-container">
        <header
          className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-grid"
          data-uk-grid=""
        >
          <div className="uk-panel uk-text-center">
            <h2 className="uk-h3 uk-h1@m">Why choose us?</h2>
          </div>
        </header>
        <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
          <img
            className="uk-position-top-left uk-text-secondary"
            width={16}
            src="../assets/images/objects/circle-01.png"
            alt="Object"
            style={{ top: "-16%", left: "8%" }}
          />
          <img
            className="uk-position-bottom-right uk-text-primary"
            width={24}
            src="../assets/images/objects/circle-02.png"
            alt="Object"
            style={{ bottom: "16%", right: "-8%" }}
          />
          <img
            className="uk-position-bottom-left uk-text-muted"
            width={28}
            src="../assets/images/objects/x.png"
            alt="Object"
            style={{ bottom: "16%", left: "-8%" }}
          />
          <div
            className="uk-grid uk-child-width-1-4@s"
            data-uk-grid="masonry: true;"
          >
            {WhyUsDetails?.map((item, index) => (
              <div key={index}>
                <div className="uk-panel uk-card uk-card-small uk-padding-large-horizontal uk-radius-medium uk-radius-large@m uk-box-shadow-xsmall dark:uk-background-white-5">
                  <span className="uk-h3 uk-h2@m uk-text-gradient">
                    {item.ID}
                  </span>
                  <div className="uk-panel uk-margin-top">
                    <h3 className="uk-h5 uk-h4@m">{item.title}</h3>
                    <p className="uk-text-muted">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
