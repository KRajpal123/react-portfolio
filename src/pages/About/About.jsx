import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-xs-12 pic-img">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                        alt="myProfilePic"
                    />
                </div>
                <div className=" about-content col-md-6 col-lg-6 col-xl-6 col-xs-12">
                    <h1>About Me</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, eaque! Tempora, quam officiis minus quidem excepturi assumenda harum illum,
                        nihil ratione enim officia. Similique provident voluptatibus id omnis natus expedita!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, eaque! Tempora, quam officiis minus quidem excepturi assumenda harum illum,
                        nihil ratione enim officia. Similique provident voluptatibus id omnis natus expedita!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, eaque! Tempora, quam officiis minus quidem excepturi assumenda harum illum,
                        nihil ratione enim officia. Similique provident voluptatibus id omnis natus expedita!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
