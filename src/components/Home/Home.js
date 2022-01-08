import React from "react";
import "./Home.css";
import HomeImg from "../../assets/images/heroImg.png";
import { motion } from "framer-motion";
import Typical from "react-typical";

function Home() {
  return (

    <div className="container-fluid heroPage">
      <div className="row">
        <div className="col-md-6">
          <div className="myDesc">
            <p style={{ color: "white" }}>Welcome Hello World</p>
            <p className="name_Heading">Hi, I’m Zia Ur Rehman</p>
            <p className="skills" style={{ color: "white" }}>
              <Typical
                steps={[
                  "JamStack Developer 💻",
                  2000,
                  "React Js Developer 💻",
                  2000,
                  2000,
                  "Web UI/UX Developer 💻",
                  2000,

                ]}
                loop={Infinity}
                wrapper="p"
              />
            </p>
            <a href="https://drive.google.com/file/d/1eTQSJ-ucBjdZsvWzYgcLAqNe3mYvxCIY/view?usp=sharing" target="_blank" rel="noreferrer">
              <button className="work_Btn">View My CV</button>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <motion.div
            className="image"
            animate={{ translateY: [-20, 0, -20, 0] }}
            transition={{ yoyo: Infinity, duration: 6 }}
          >
            <img src={HomeImg} alt="" />
          </motion.div>
        </div>
      </div>

    </div>




  );
}

export default Home;
