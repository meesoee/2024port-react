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
        desc: "밴드적성 검사를 만들었습니다",
        date: "2021년 작품^^",
        url: "https://band-test.com",
    },
    {
        name: "디자인웍스",
        id: "designworks",
        tag: ["github","html","css","javascript"],
        img: [""],
        alt: [""],
        desc: "",
        date: "",
    },
    {
        name: "롤비티아이",
        id: "lolbti",
        tag: ["github","php","css","javascript"],
        img: [""],
        alt: [""],
        desc: "",
        date: "",
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


const Archive = () => {
    return (
        <section className="archive" id="archive">
            <h3 className="section-caption">Archive</h3>

            {portList.map((ele,key) => (
                <div className="section-inner" id={ele.id} key={key}>
                    <section>
                        <div className="slidebox">
                            <button className="arrow prev">&lt;</button>
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