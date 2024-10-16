import React, {useState} from 'react';
import './News.css';
import data from "../../static/data";
import NewArrow from "./NewArrow";


let {news: {title, subTitle}} = data
export default function News() {
    const [hovered, setHovered] = useState(false)
    return <div className={`news ${hovered ? 'hovered' : ''}`}>
        <div className="news-arrows">
            <NewArrow color={hovered ? '#090909' : '#CCF304'}/>
            <NewArrow color={hovered ? '#090909' : '#CCF304'}/>
        </div>
        <div className={`news-subtitle ${hovered ? 'hovered' : ''}`}>{subTitle}</div>
        <div className="news-title"
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}>
            {title}
        </div>

    </div>
}
