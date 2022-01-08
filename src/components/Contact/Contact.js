import React, { useState, useRef } from 'react'
import './Contact.css';
import "../Services/Services.css";
import ContactImage from '../../assets/images/contact.png'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [description, setdescription] = useState("");

    const sendEmail = () => {
        emailjs.sendForm('service_ep1a5uf', 'template_e2bdfls', form.current, 'user_PLCGjKYKmlfPVvroqsn4q')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setname("");
        setemail("");
        setdescription("");
    }

    return (
        <div id='contact'>
            <div className="contact_Bg">
                <div className="heading">
                    <h3>Contact Me</h3>
                    <div className="underline"></div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact_Image">
                                <img src={ContactImage} alt="" />
                            </div>
                            <div className="social_Icons">
                                <a href="https://www.facebook.com/profile.php?id=100045148653080" target="_blank" rel="noreferrer">
                                    <div className='icons'>
                                        <AiFillFacebook className='fb' size={35} />
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/ziaalikhan052/" target="_blank" rel="noreferrer">
                                    <div className='icons'>
                                        <FaInstagram className='insta' size={35} />
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/zia-ur-rehman-25495a186/" target="_blank" rel="noreferrer">
                                    <div className='icons'>

                                        <AiFillLinkedin className='linkd' size={35} />
                                    </div>
                                </a>
                                <a href="https://github.com/ziaalikhan" target="_blank" rel="noreferrer">
                                    <div className='icons'>
                                        <AiFillGithub style={{ color: "black" }} className='git' size={35} />
                                    </div>
                                </a>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="contact_forms">
                                <form ref={form}>
                                    <input type="text" id="fname" name="name" value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter Your Name" />
                                    <input
                                        type="text"
                                        id="lname"
                                        name="email"
                                        value={email} onChange={(e) => setemail(e.target.value)}
                                        placeholder="Enter You Email"
                                    />
                                    <textarea
                                        id="subject"
                                        name="message"
                                        cols="30"
                                        rows="6"
                                        value={description} onChange={(e) => setdescription(e.target.value)}
                                        placeholder="Write something.."

                                    />
                                </form>
                                <button onClick={sendEmail} className="contact_Btn">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
