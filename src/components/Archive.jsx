import React, { useEffect } from "react";
// import { nextSlide } from '../utils/nextSlide';

const portList = [
    {
        name: "밴드 적성 검사",
        id: "bandtest",
        tag: ["github","html","css","javascript"],
        img: [
            "https://whale-store.pstatic.net/20180905_261/1536114238953OSJJt_JPEG/%C6%C4%B8%AE2.jpg",
            "https://whale-store.pstatic.net/20180905_196/153611523187137PYw_JPEG/Fotolia_175435650_Subscription_Monthly_XXL.jpg"
        ],
        alt: [
            "1",
            "2"
        ],
        desc: "생활코딩으로 입문용 자바스크립트를 배운 뒤, 실습 및 적용을 해보기 위해 자체적으로 제작해 본 첫 토이 프로젝트입니다. 정적인 웹페이지를 개발, 배포해보기 위해 처음으로 버전관리 시스템 중 하나인 <깃허브>를 처음 접한 계기가 되었습니다.\n\n간단한 프로젝트인 만큼 디자인테마 및 캐릭터도 단순하고 귀여운 느낌으로 제작하였고, 마우스 사용 없이 오로지 키보드의 Tab과 Enter만으로도 테스트를 해 볼 수 있도록 접근성에 신경써서 작업해보았습니다.",
        date: "2021년 2월 (약 1달 소요)",
        url: "https://band-test.com",
    },
    {
        name: "디자인웍스",
        id: "designworks",
        tag: ["github","html","css","javascript"],
        img: [""],
        alt: [""],
        desc: "",
        date: "2023년 10월 (7일 소요)",
    },
    {
        name: "롤비티아이",
        id: "lolbti",
        tag: ["github","php","css","javascript"],
        img: [""],
        alt: [""],
        desc: "",
        date: "2023년 10월 ~ 12월 (약 2달 소요)",
    },
    {
        name: "리액트",
        id: "react",
        tag: ["github","react","scss","javascript"],
        img: [""],
        alt: [""],
        desc: "",
        date: "",
    }
];

const handleClick = () => {
    console.log('버튼이 클릭되었습니다.');
};

const Archive = () => {
    console.log('Archive 컴포넌트가 렌더링 되었습니다.');
    return (
        <section className="archive" id="archive">
            <h3 className="section-caption">Archive</h3>
            <button onClick={handleClick}>클릭하세요</button>
            {portList.map((ele,key) => (
                <div className="section-inner" id={ele.id} key={key}>
                    <section>
                        <div className="slidebox">
                            <button className="arrow prev" onClick={console.log('a')}>&lt;</button>
                            {ele.img && ( // 아래 응용
                                ele.img.map((img, index) => (
                                    <div className="slideitem">
                                        <img key={index} src={img}
                                        alt={ele.alt[index]} />
                                    </div>
                                ))
                            )}
                            <button className="arrow next">&gt;</button>
                        </div>
                        <article>
                            <h2>{ele.name}</h2>
                            {ele.tag && ( // supported by chatGPT
                                <div className="tag">
                                    <span className="mini">사용기술 : </span>
                                    {ele.tag.map((tag, index) => (
                                        <span 
                                        className={tag + ' mini'}
                                        key={index}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <p className="desc">{ele.desc}</p>
                            <p className="date mini">작업기간 : {ele.date}</p>
                            <button>
                                <a href={ele.url} target="_blank">페이지 방문</a>
                            </button>
                        </article>
                    </section>
                </div>
                ))}
        </section>
    );
};

export default Archive;