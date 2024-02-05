import React from "react";

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
        img: [
            "https://whale-store.pstatic.net/20180905_261/1536114238953OSJJt_JPEG/%C6%C4%B8%AE2.jpg"
        ],
        alt: [
            "1"
        ],
        desc: "충주시에 위치한 인테리어디자인 업체의 홈페이지를 제작하였습니다.\n\n한 페이지 안에서 소개가 이루어져야하기에 랜딩페이지 스타일로 제작하였으며 상담 예약이 가능하도록 Formspree Api를 연결하여 문의 양식을 추가하였습니다. 또한, 개별 블로그의 최신 글을 가져올 수 있도록 RSS 를 호출하여 게시글 리스트가 출력될 수 있도록 XML을 가공하였습니다.\n\n국내 호스팅 업체를 통해 호스팅/배포하였으며 개발 코드 및 백업은 Github 레포지토리를 통해 관리하고 있습니다.",
        date: "2023년 10월 (7일 소요)",
        url: "http://design-works.co.kr/",
    },
    {
        name: "롤비티아이",
        id: "lolbti",
        tag: ["github","php","css","javascript","mysql"],
        img: [""],
        alt: [""],
        desc: "게임 '리그 오브 레전드'의 요소를 활용한 토이 프로젝트입니다. 그림 요소 및 기획은 담당자가 별도로 있으며, 본 프로젝트에서 저는 UI 디자인, DB 세팅, 풀스택 개발을 담당하였습니다.\n\n페이지 구성은 방문자가 테스트를 할 수 있는 프론트페이지와 관리자를 위한 어드민 페이지를 함께 개발하였으며 이를 위해 MySql 데이터베이스를 함께 구축해보았습니다.\n\n라이브러리나 프레임워크 없이 직접 어드민 페이지 개발이나 데이터베이스 환경을 모두 세팅하는 것은 처음이었기에 의미있었고 즐겁게 작업했던 프로젝트입니다.",
        date: "2023년 10월 ~ 12월 (약 2달 소요)",
        url: "http://lolbti.com/"
    },
    {
        name: "리액트",
        id: "react",
        tag: ["github","react","scss"],
        img: [""],
        alt: [""],
        desc: "현재까지의 작업물을 갈무리하기 위한 포트폴리오 페이지를 만들 겸, 한 번도 써보지 않은 라이브러리인 리액트를 사용해보았습니다.\n\n참고가 되는 페이지를 통해 기본적인 리액트 설치 및 netlify를 통한 배포 세팅을 한 뒤 자신만의 UI를 적용하여 만든 현재의 포트폴리오 사이트입니다.\n\n바닐라 자바스크립트를 어떻게 적용해야할지 몰라 애니메이션은 CSS trick만을 활용한 것이 특징입니다.\n\n님들아.. 리액트에서 자바스크립트 대체 어떻게 쓰는겁니까?",
        date: "2024년 1월 ~ 2월 (약 10일 소요)",
        url: "/",
        ref: "https://webstoryboy.co.kr/1934",
    }
];

const Archive = () => {
    console.log('Archive 컴포넌트가 렌더링 되었습니다.');
    return (
        <section className="archive" id="archive">
            <h3 className="section-caption">Archive</h3>
            {portList.map((ele,key) => (
                <div className="section-inner" id={ele.id} key={key}>
                    <section>
                        <div className="slidebox">
                            {ele.img && ( // 아래 응용
                                ele.img.map((img, index) => (
                                    <div className="slideitem">
                                        <img key={index} src={img}
                                        alt={ele.alt[index]} />
                                    </div>
                                ))
                                )}
                            <button className="arrow prev">&lt;</button>
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
                            <p className="mini">작업기간 : {ele.date}</p>
                            {ele.ref && (
                                ele.ref != false
                                ?
                                <p className="mini">참고자료 : <a href={ele.ref}>{ele.ref}</a></p>
                                :
                                ''
                            )}
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