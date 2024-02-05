import React from "react";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="section-inner">
                <div className="visual">
                    <h3>HELLO, WORLD!</h3>
                    <p>My name is</p>
                    <h1>MEESOEE</h1>
                    <p>a <span>WEB DEVELOPER</span>,<br />
                    formerly a <span>DESIGNER</span>.</p>
                    <div className="kor">
                        안녕하세요, <span>미소이</span>라고 합니다.
                        <br />
                        <span>디자이너</span>였기도 하고,
                        <br />
                        <span>웹 개발자</span>이기도 합니다.
                        <br />
                        <small><i>...아직은요!</i></small>
                    </div>
                </div>
                <p>=== 아래로 스크롤 해서 구경하기 ===</p>
            </div>
        </section>
    );
};

export default About;