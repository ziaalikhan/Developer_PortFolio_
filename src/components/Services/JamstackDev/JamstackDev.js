import React from "react";
import "./../Services.css";
import Slider from "react-slick";

const JamstackDev = () => {
    const Serimages = {
        nextjs: "./images/nextjs.png",
        gatsbyjs: "./images/gatsbyjs.png",
        graphql: "./images/graphql.png",
        faunadb: "./images/faunadb.png",
        serverlessFunction: "./images/serverlessFunction.png",
        netlify: "./images/netlify.png",
        npm: "./images/npm.png",
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
        <div className="services_Page">

            <div className="slider_cont">
                <h2 style={{ textAlign: "center" }}>JamStack Development</h2>
                <div className="underline1"></div>
                <Slider style={{ marginTop: "8%" }} {...settings}>
                    <div>
                        <img width="100px" height="100px" src={Serimages.nextjs} alt="" />
                    </div>
                    <div>
                        <img width="100px" height="100px" src={Serimages.gatsbyjs} alt="" />
                    </div>
                    <div>
                        <img width="100px" height="100px" src={Serimages.graphql} alt="" />

                    </div>
                    <div>
                        <img width="100px" height="100px" src={Serimages.faunadb} alt="" />

                    </div>
                    <div>
                        <img width="100px" height="100px" src={Serimages.serverlessFunction} alt="" />
                    </div>
                    <div>
                        <img width="100px" height="100px" src={Serimages.netlify} alt="" />
                    </div>
                    <div>
                        <img width="100px" height="100px" src={Serimages.npm} alt="" />
                    </div>

                    <div>
                        <img width="100px" height="100px" src={Serimages.typescript} alt="" />
                    </div>
                    <div>
                        <img width="100px" height="100px" src={Serimages.firebase} alt="" />
                    </div>

                </Slider>
            </div>

        </div>
    );
};

export default JamstackDev;
