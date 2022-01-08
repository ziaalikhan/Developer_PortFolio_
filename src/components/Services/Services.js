import React from "react";
import "./Services.css";
import Slider from "react-slick";
import JamstackDev from './JamstackDev/JamstackDev';
import Work from '../Work/Work';

const Services = () => {
  const Serimages = {
    html: "./images/html.png",
    css: "./images/css.png",
    saass: "./images/saass.png",
    javascript: "./images/javascript.png",
    bootstrap: "./images/bootstrap.png",
    materialui: "./images/materialui.png",
    tailwindcss: "./images/tailwindcss.png",
    reactjs: "./images/reactjs.png",
    typescript: "./images/typescript.png",
    firebase: "./images/firebase.png",
  }
  var settings = {
    lazyLoad: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 3,
          autoplay: true,
          autoplaySpeed: 1000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          autoplay: true,
          autoplaySpeed: 1000,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
        }
      },
    ]
  };
  return (
    <div id="services" className="services_Page">
      <div className="about_Bg">
        <div className="heading">
          <h2>Services</h2>
          <div className="underline"></div>
        </div>
        <div className="slider_cont">
          <h2 style={{ textAlign: "center" }}>FrontEnd Development</h2>
          <div className="underline1"></div>
          <Slider style={{ marginTop: "8%" }} {...settings}>
            <div>
              <img width="100px" height="100px" src={Serimages.html} alt="" />
            </div>
            <div>
              <img width="100px" height="100px" src={Serimages.css} alt="" />
            </div>
            <div>
              <img width="100px" height="100px" src={Serimages.saass} alt="" />

            </div>
            <div>
              <img width="100px" height="100px" src={Serimages.javascript} alt="" />

            </div>
            <div>
              <img width="100px" height="100px" src={Serimages.bootstrap} alt="" />
            </div>
            <div>
              <img width="100px" height="100px" src={Serimages.materialui} alt="" />
            </div>
            <div>
              <img width="100px" height="100px" src={Serimages.tailwindcss} alt="" />
            </div>
            <div>
              <img width="100px" height="100px" src={Serimages.reactjs} alt="" />
            </div>
            <div>
              <img width="100px" height="100px" src={Serimages.typescript} alt="" />
            </div>
            <div>
              <img width="100px" height="100px" src={Serimages.firebase} alt="" />
            </div>

          </Slider>
        </div>
        <div>
          <JamstackDev />
          <Work />
        </div>
      </div>
    </div>
  );
};

export default Services;
