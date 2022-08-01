import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import "./Home.css";
import samarqand from "../../assets/Images/samarqand.png";
import xiva from "../../assets/Images/xiva.png";
import namangan from "../../assets/Images/namangan.png";
import fargona from "../../assets/Images/fargona.png";

const SectionStyle = {
  height: "100vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Home() {
  return (
    <div className="home">
      <Fullpage>
        <div className="sectionNav">
          <FullpageNavigation />
        </div>
        <FullPageSections>
          <FullpageSection style={{ SectionStyle }}>
            <div className="header_section-one">
              <div className="header-bc">
                <div className="header-content">
                  <p className="first-text">
                    the best deals on the world's best destinations
                  </p>
                  <h1 className="main-text">Best travel and destinations</h1>
                  <p className="last-text">
                    With travala you can experience new travel and the best{" "}
                    <br />
                    tourist destinations that we have to offer tourist
                    <br />
                    destinations that we have to offer.
                  </p>
                  <button>Get Started</button>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }}>
            <div className="header_section-two">
              <div className="home_cards">
                <h1 className="center-text">Turistik shaharlar</h1>
                <div className="center-text-line" />
                <div className="card_content grid grid-cols-4 gap-1">
                  <div className="card-item">
                    <div className="card-image">
                      <img src={samarqand} alt="" />
                    </div>
                    <h1 className="card-title">Samarqand</h1>
                  </div>{" "}
                  <div className="card-item">
                    <div className="card-image">
                      <img src={xiva} alt="" />
                    </div>
                    <h1 className="card-title">Samarqand</h1>
                  </div>{" "}
                  <div className="card-item">
                    <div className="card-image">
                      <img src={namangan} alt="" />
                    </div>
                    <h1 className="card-title">Samarqand</h1>
                  </div>{" "}
                  <div className="card-item">
                    <div className="card-image">
                      <img src={fargona} alt="" />
                    </div>
                    <h1 className="card-title">Samarqand</h1>
                  </div>{" "}
                  <div className="card-item">
                    <div className="card-image">
                      <img src={samarqand} alt="" />
                    </div>
                    <h1 className="card-title">Samarqand</h1>
                  </div>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }}>
            <h1>Style 3</h1>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }}>
            <h1>Style 3</h1>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }}>
            <h1>Style 3</h1>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }}>
            <h1>Style 3</h1>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}

export default Home;
