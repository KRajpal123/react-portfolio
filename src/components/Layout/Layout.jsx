import React, { useState } from 'react'
import Home from '../../pages/Home/Home';
import { BsBoxArrowInRight, BsBoxArrowInLeft } from "react-icons/bs";
import "./Layout.css";
import Menu from '../Menu/Menu';


const Layout = () => {

    const [toggle, setToggle] = useState(true);

    // handle toggle 
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <div className="sidebar-sect">
                <div className={toggle ? " sidebar-toggle sidebar" : "sidebar"}>
                    <div className="sidebar-icons">
                        <p onClick={handleToggle}>
                            {
                                toggle ? (<BsBoxArrowInLeft size={30} />) : (<BsBoxArrowInRight size={30} />)
                            }
                        </p>
                    </div>
                            <Menu toggle={toggle} />
                </div>
                <div className="container-fluid">
                    <Home />
                </div>
            </div>
        </>
    )
}

export default Layout