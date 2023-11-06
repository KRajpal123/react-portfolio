import React from "react";
import "./Tech.css";
import { TechList } from "../../Utils/TechList"

const Tech = () => {
    return (
        <>
            <div className="container tech">
                <h1 className="col-12 text-center mt-3">Technologies</h1>
                <hr />
                <p className="pb-3 text-center">
                    👉 including programming languages, frameworks,databases, front-end and
                    backend tools, and APIs
                </p>
                <div className="row">
                    {
                        TechList.map((tech) => (
                            <div className="col-md-3" key={tech._id}>
                                <div className="card m-2">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="media d-flex justify-content-center">
                                                <div className="align-self-center">
                                                <tech.icon className="tech-icons" />
                                                </div>
                                                <div className="media-body">
                                                    <h5>{tech.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Tech;
