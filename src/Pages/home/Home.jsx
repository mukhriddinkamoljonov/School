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
import umrah from "../../assets/Images/umrah.png";
import karimov from "../../assets/Images/karimov.png";
import alisher from "../../assets/Images/alisher.png";
import ziyorat from "../../assets/Images/ziyorat.png";
import saroy from "../../assets/Images/saroy.png";
import chorvoq from "../../assets/Images/chorvoq.png";
import haykal from "../../assets/Images/haykal.png";
import samar from "../../assets/Images/samar.png";
import naman from "../../assets/Images/naman.png";
import about1 from "../../assets/Images/about1.png";
import about2 from "../../assets/Images/about2.png";
import about3 from "../../assets/Images/about3.png";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FileIcon, MapIcon, MessengeIcon, PhoneIcon } from "../../assets/icon";

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
          <FullpageNavigation style={{ zIndex: "-1" }} />
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
                      <img src={xiva} alt="" />
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
            <div className="home_urmrah">
              <div className="home_umrah_content">
                <div className="home_umrah_image">
                  <img src={umrah} alt="" />
                </div>
                <div className="home_urmrah_content_text">
                  <h1 className="home_urmrah_title">
                    Umra ziyorati uchun hozir band qiling!
                  </h1>
                  <p className="home_urmrah_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ipsum eget libero elementum amet ultricies ut hac ultrices
                    ullamcorper. Enim nullam eu libero accumsan, nisl amet. Enim
                    nullam eu libero accumsan, nisl amet. Enim nullam eu libero
                    accumsan, nisl amet.
                  </p>
                  <button className="home_urmrah_button">Get Started</button>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }}>
            <div className="home_carousel">
              <h1 className="center-text">Diqqatga sazovor joylar</h1>
              <hr className="carousel-text-line" />
              <div className="home_carousel_content">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  slidesPerGroup={3}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <div className="carousel-content">
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img src={karimov} alt="" />
                        </div>
                        <h1>Islom Karimov muzeyi</h1>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img src={alisher} alt="" />
                        </div>
                        <h1>Alisher Navoiy teatri</h1>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img src={ziyorat} alt="" />
                        </div>
                        <h1>Hazrati Dovud ziyoratgohi</h1>
                      </div>
                    </SwiperSlide>{" "}
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img src={alisher} alt="" />
                        </div>
                        <h1>Alisher Navoiy teatri</h1>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img src={karimov} alt="" />
                        </div>
                        <h1>Islom Karimov muzeyi</h1>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img src={ziyorat} alt="" />{" "}
                        </div>
                        <h1>Hazrati Dovud ziyoratgohi</h1>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }}>
            <div className="home_galereya">
              <div className="home_galereya_content">
                <h1 className="center-text_3">Galereya</h1>
                <hr className="center-text-line_3" />
                <div className="home_galereya_images">
                  <div>
                    <img src={saroy} alt="" />
                    <img src={chorvoq} alt="" />
                  </div>
                  <div>
                    <img src={haykal} alt="" />
                  </div>
                  <div>
                    <img src={samar} alt="" />
                    <img src={naman} alt="" />
                  </div>
                </div>
                <button>Barchasini ko‘rish</button>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }}>
            <div className="home_about">
              <h1 className="center-text_4">Biz haqimizda</h1>
              <hr className="center-text-line_4" />
              <div class="grid grid-rows-3 grid-flow-col gap-4 home_about-content">
                <div class="col-span-2 about-image_1">
                  <img src={about1} alt="" />
                </div>
                <div class="row-span-2 col-span-2 about-img">
                  <img src={about2} alt="" />
                  <img src={about3} alt="" />
                </div>
                <div class="row-span-3 about-text">
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ipsum eget libero elementum amet ultricies ut hac ultrices
                      ullamcorper. Enim nullam eu libero accumsan, nisl amet.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ipsum eget libero elementum amet ultricies ut hac ultrices
                      ullamcorper. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Ipsum eget libero elementum amet
                      ultricies ut hac ultrices ullamcorper. Enim nullam eu
                      libero accumsan, nisl amet. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Ipsum eget libero elementum
                      amet ultricies ut hac ultrices ullamcorper.
                    </p>
                    <button>Ko‘proq bilish</button>
                  </div>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }}>
            <div className="home_contact">
              <h1 className="center-text_5">Kontaktlarimiz</h1>
              <hr className="center-text-line_5" />
              <div className="home_contact_content flex">
                <div className="">
                  <div className="flex">
                    <span>
                      <MapIcon />
                    </span>
                    <p>
                      436 Coventry Road Small <br /> Heath Birmingham B10 0UG{" "}
                      <br /> United Kingdom
                    </p>
                  </div>{" "}
                  <br />
                  <div className="flex">
                    <span>
                      <PhoneIcon />
                    </span>
                    <p>(+1) 923 2341 22</p>
                  </div>
                </div>
                <div className="mb-11">
                  <div className="flex">
                    <span>
                      <MessengeIcon />
                    </span>
                    <p>contact@TourismUmrah.com</p>
                  </div>{" "}
                  <br />
                  <div className="flex">
                    <span>
                      <FileIcon />
                    </span>
                    <p>fax@TourismUmrah.com</p>
                  </div>
                </div>
              </div>
              <button>So‘rov yuborish</button>
            </div>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}

export default Home;
