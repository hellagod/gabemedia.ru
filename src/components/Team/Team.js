import React, {useEffect, useState} from 'react';
import './Team.css';
import data from "../../static/data";
import Slider from "react-slick";
import Teammate from "../Teammate/Teammate";
import useScreenSize from "../../hooks/useScreenSize";
import TeamBack from "./TeamBack";
import useDimensions from "../../hooks/useDimensions";

let {team: {title, teammates}, commonIcons: {ArrowRight}} = data

function Next(props) {
    const {onClick} = props;
    return <div
        className="slider-button"
        onClick={onClick}>
        <ArrowRight/>
    </div>

}

function Prev(props) {
    const {onClick} = props;
    return <div
        className="slider-button"
        style={{transform: "rotate(180deg)"}}
        onClick={onClick}>
        <ArrowRight/>
    </div>
}


export default function Team({teamRef}) {
    const {width} = useScreenSize();
    const [maxWidth, setMaxWidth] = useState("1200px")
    const [slidesToShow, setSlidesToShow] = useState(1)
    const [tRef, teamDems] = useDimensions()
    const [titleRef, titleDems] = useDimensions()


    useEffect(() => {
        if (width >= 1270){
            setMaxWidth("1200px")
            setSlidesToShow(3)
        }
        else if (width >= 1030){
            setMaxWidth("860px")
            setSlidesToShow(2)
        }
        else if (width >= 550){
            setMaxWidth("500px")
            setSlidesToShow(1)
        }
        else {
            setMaxWidth("350px")
        }
    }, [width]);

    const SliderCounted = ({count}) => <Slider {...{
        dots: false,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        nextArrow: <Next/>,
        prevArrow: <Prev/>
    }} slidesToShow={count} className="slider-container">
        {teammates.map((data, index) => <div key={index}>
            <Teammate data={data}/>
        </div>)}
    </Slider>
    return <div ref={teamRef} className="team">
        <TeamBack teamDems={teamDems} titleDems={titleDems}/>
        <div className="team-card">
            <div ref={titleRef} className="team-title">
                {title}
            </div>
            <div ref={tRef} style={{maxWidth}}>
                <SliderCounted count={slidesToShow}/>
            </div>
        </div>
    </div>
}
