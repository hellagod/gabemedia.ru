import React from 'react';
import './Teammate.css';

export default function Teammate({data: {photo, name, statistics}}) {
    return <div className="teammate">
        <div className="teammate-img-back">
            <img src={photo} className="teammate-img" alt={name}/>
        </div>
        <div className="teammate-name">
            {name}
        </div>
        <div className="teammate-statistics">
            {statistics.slice(0,2).map(({Icon, type, href, audience, id}) => <div key={id} className="teammate-statistics-text">
                <span className={`teammate-statistics-${type}`}>
                    <Icon/>
                </span>
                <span>
                    > {audience}
                </span>
            </div>)}
        </div>
    </div>
}
