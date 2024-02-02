import React from "react";

const portList = [
    {
        name: "밴드 적성 검사",
        url: "#a",
        year: "2021",
    },
    {
        name: "디자인웍스",
        url: "#b",
        year: "2023",
    },
    {
        name: "롤비티아이",
        url: "#c",
        year: "2023",
    },
    {
        name: "리액트 사이트",
        url: "#d",
        year: "2024",
    }
];

const Timeline = () => {
    return (
        <section className="Timeline" id="timeline">
            <h3 className="section-caption">Timeline</h3>
            <div className="section-inner">

                {portList.map((ele) => (
                    <a className="time-point"
                    href={ele.url}
                    title={ele.name + ' 포트폴리오로 이동'}>
                        <div className="point-tooltip">
                            <b>{ele.year + '년'}</b> {ele.name}
                        </div>
                    </a>
                ))}
                <div id="timeline-bar"></div>
            </div>
        </section>
    );
};

export default Timeline;