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
                <a href="/">
                    <img className="icon" src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="logo" />
                </a>
                <nav className={`nav ${nav_show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {pageList.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a id="global" href="/">
                    <img className="icon" src={process.env.PUBLIC_URL + '/img/global.svg'} alt="Language change button" />
                </a>
                <a id="top" href="#">
                    <img className="icon" src={process.env.PUBLIC_URL + '/img/top.svg'} alt="TOP button" />
                </a>
                <a
                id="navToggle" 
                aria-controls="primary-menu"
                aria-expanded={nav_show ? "true" : "false"}
                role="button" 
                tabIndex="0"
                onClick={toggleMenu}>
                    <img className="icon" src={process.env.PUBLIC_URL + '/img/menu.svg'} alt="menu" />
                </a>
            </div>
        </header>
    );
};

export default Header;