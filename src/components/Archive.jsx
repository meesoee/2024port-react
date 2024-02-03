import React from "react";

const portList = [
    {
        name: "밴드 적성 검사",
        id: "bandtest",
        tag: ["github","html","css","javascript"],
        desc: "밴드적성 검사를 만들었습니다",
        date: "2021년 작품^^",
    },
    {
        name: "디자인웍스",
        id: "designworks",
        tag: ["github","html","css","javascript"],
        desc: "",
        date: "",
    },
    {
        name: "롤비티아이",
        id: "lolbti",
        tag: ["github","html","css","javascript","php"],
        desc: "",
        date: "",
    },
    {
        name: "리액트",
        id: "react",
        tag: ["github","html","css","javascript","react"],
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
                        <div className="img">
                            <img src="" alt="" />
                        </div>
                        <article>
                            <h2>{ele.name}</h2>
                            {ele.tag && ( // supported by chatGPT
                                <div className="tag">
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
                            <p className="date">{ele.date}</p>
                        </article>
                    </section>
                </div>
                ))}
        </section>
    );
};

export default Archive;