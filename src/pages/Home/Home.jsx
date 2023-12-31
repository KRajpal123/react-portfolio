import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../components/docs/Resume.txt"

const Home = () => {
    return (
        <>
            <div className="container-fluid home">
                <div className="container content">
                    <h2> Hi👋I'm a </h2>
                    <h1>
                        <Typewriter
                            options={{
                                strings: [
                                    "React Developer!",
                                    "MERN Stack Developer!",
                                    "Full Stack Developer!",
                                    "Freelancer!"
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <div className="buttons">
                        <button className="btn hire">Hire Me</button>
                        <a className="btn cv" href={Resume}>Resume</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
