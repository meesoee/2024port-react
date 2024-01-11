import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Archive from "../components/Archive";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";

const HomeView = () => {
    return (
    <>
        <Header />
        <Main>
            <About />
            <Timeline />
            <Archive />
            <Contact />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;