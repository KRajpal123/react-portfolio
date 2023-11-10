import React from 'react';
import "./menu.css"
import { AiOutlineHome ,AiFillContacts} from "react-icons/ai"
import { FcAbout, FcBusinessman, FcBiotech, FcReadingEbook, } from "react-icons/fc"
import {BsProjector,BsCardList} from "react-icons/bs"

const Menu = ({ toggle }) => {
    return (
        <>
            {
                toggle ? (
                    <>
                        <div className="profile-pic">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt="myProfilePic" />
                        </div>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <span><AiOutlineHome /></span>Home
                                </div>
                                <div className="nav-link">
                                    <span><FcAbout /></span>About
                                </div>
                                <div className="nav-link">
                                    <span><FcReadingEbook /></span>Education
                                </div>
                                <div className="nav-link">
                                    <span><FcBusinessman /></span>Work Experience
                                </div>
                                <div className="nav-link">
                                    <span><FcBiotech /></span> Technology
                                </div>
                                <div className="nav-link">
                                    <span><BsProjector /></span>Projects
                                </div>
                                <div className="nav-link">
                                    <span><BsCardList /></span>Testimonial
                                </div>
                                <div className="nav-link">
                                    <span><AiFillContacts/></span>Contact
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                       <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <AiOutlineHome title='home' />
                                </div>
                                <div className="nav-link">
                                    <FcAbout title='about' />
                                </div>
                                <div className="nav-link">
                                    <FcReadingEbook title='Education' />
                                </div>
                                <div className="nav-link">
                                    <FcBusinessman title='work' />
                                </div>
                                <div className="nav-link">
                                    <FcBiotech title='technology' />
                                </div>
                                <div className="nav-link">
                                    <BsProjector title='Projects'/>
                                </div>
                                <div className="nav-link">
                                    <BsCardList title='Testimonial' />
                                </div>
                                <div className="nav-link">
                                    <AiFillContacts title='Contact'/>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Menu