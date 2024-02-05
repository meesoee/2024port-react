import React from "react";
import emailLogo from "../assets/img/email.svg";
import GitHubLogo from "../assets/img/github.svg";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h3 className="section-caption">Contact</h3>
            <div className="section-inner">
                <article>
                    <h2>방문해주셔서 감사합니다!</h2>
                    <p>전공에 국한되지 않고 새로운 경험을 익히는 것을 선호합니다. 언제나 무언갈 하며 성장하겠습니다!</p>
                    <h3>Meesoee</h3>
                </article>
                <article>
                    <img src={emailLogo} alt="이메일 아이콘" />
                    <h2>E-mail</h2>
                    <a className="mini" href="mailto:meesoeee@gmail.com">meesoeee@gmail.com</a>
                    <p>이메일 무단수집 거부.</p>
                </article>
                <article>
                    <img src={GitHubLogo} alt="깃허브 아이콘" />
                    <h2>GitHub</h2>
                    <a className="mini" href="https://github.com/meesoee" target="_blank">https://github.com/meesoee</a>
                    <p>가끔 잔디를 심는 모습을 볼 수 있을지도..?</p>
                </article>
            </div>
        </section>
    );
};

export default Contact;