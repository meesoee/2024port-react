import React, { useState } from "react";

const pageList = [
    {
        title: "About",
        url: "#about",
    },
    {
        title: "Timeline",
        url: "#timeline",
    },
    {
        title: "Archive",
        url: "#archive",
    },
    {
        title: "contact",
        url: "#contact",
    },
];

const Header = () => {
    const [nav_show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <header id="header" role="structure">
            <div className="headerBox">
                <div className="logo">
                    <a href="/">LOGO</a>
                </div>
                <nav className={`nav ${nav_show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {pageList.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a id="global" href="/">global</a>
                <a id="top" href="/">TOP</a>
                <div 
                    id="navToggle" 
                    aria-controls="primary-menu"
                    aria-expanded={nav_show ? "true" : "false"}
                    role="button" 
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span>Mobile</span>
                </div>
            </div>
        </header>
    );
};

export default Header;