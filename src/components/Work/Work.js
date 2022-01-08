import React from 'react'
import './Work.css';
import "../Services/Services.css";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import workData from './WorkData';
import Contact from '../Contact/Contact';

const Work = () => {
    return (
        <div id='work' className="main_work_page">
            <div className="work_Bg">
                <div className="heading">
                    <h3>My Work</h3>
                    <div className="underline"></div>
                </div>

                <div className="main_work_cards">
                    {
                        workData.map((val, id) => {
                            return (
                                <div className="cardsItem" key={id}>
                                    <div className="work_image">
                                        <img width="100%" height="100%" src={val.photos} alt="" />
                                    </div>
                                    <div className="links">
                                        <div>
                                            <a className="links" href={val.gitLink} target="_blank" rel="noreferrer">
                                                <AiFillGithub className="icons_works" size={27} />
                                            </a>
                                            <a className="links" href={val.webPrev} target="_blank" rel="noreferrer">
                                                <BsBoxArrowUpRight className="icons_works" style={{ marginLeft: "15px" }} size={27} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Work
