import React from "react";

const portList = [
    {
        work: "school",
        name: "백석대 시각디자인과 졸업",
        year: "2019",
    },
    {
        work: "y",
        name: "키노티시스템 : 웹 디자이너 & 퍼블리셔",
        year: "2019 ~ 2020",
    },
    {
        work: "n",
        name: "밴드 적성 검사",
        url: "#bandtest",
        year: "2021",
    },
    {
        work: "y",
        name: "NHN커머스 : 솔루션 유지보수",
        year: "2021 ~ 2023",
    },
    {
        work: "n",
        name: "디자인웍스",
        url: "#designworks",
        year: "2023",
    },
    {
        work: "n",
        name: "롤비티아이",
        url: "#lolbti",
        year: "2023",
    },
    {
        work: "n",
        name: "리액트 사이트",
        url: "#react",
        year: "2024",
    },
    {
        work: "y",
        name: "부평고등학교 : 보조실무사",
        year: "2024",
    }
];

const Timeline = () => {
    return (
        <section className="timeline" id="timeline">
            <h3 className="section-caption">Timeline ...</h3>
            <div className="section-inner">

                {portList.map((ele,key) => (
                    ele.work === 'n'
                    ?
                    <a className="time-point port"
                    href={ele.url}
                    title={ele.name + ' 포트폴리오로 이동'}
                    key={key}>
                        <div className="point-tooltip">
                            <b>{ele.year + '년'}</b> {ele.name}
                        </div>
                    </a>
                    :
                    <div className="time-point"
                    title={
                        ele.work === 'y'
                        ?
                        ele.name + ' 근무'
                        :
                        ele.name
                    }
                    key={key}>
                        <div className="point-tooltip">
                            <b>{ele.year + '년'}</b> {ele.name}
                        </div>
                    </div>
                ))}
                <div className="time-point now" title="TODAY">
                    <div className="point-tooltip">
                        <b>오늘!</b>
                    </div>
                </div>
                <div id="timeline-bar"></div>
            </div>
        </section>
    );
};

export default Timeline;
