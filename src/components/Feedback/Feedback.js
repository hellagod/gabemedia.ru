import React from 'react';
import './Feedback.css';
import data from "../../static/data";
import FeedbackBack from "./FeedbackBack";

let {feedback: {Title, form}, commonIcons: {ArrowRight}} = data


export default function Feedback({feedRef}) {

    return <div ref={feedRef} className="feedback">
        <FeedbackBack/>
        <div className="feedback-card">
            <Title/>
            <form className="feedback-form">
                <input className="feedback-form-input" placeholder={form.name} type="name" required/>
                <input className="feedback-form-input" placeholder={form.phone} type="phone" required/>
                <input className="feedback-form-input" placeholder={form.email} type="email" required/>
                <button className="feedback-form-input" type="submit">{form.submit}<span
                    className="feedback-form-input-icon"><ArrowRight/></span></button>
                <div className="feedback-form-politics">
                    {form.politics}
                </div>
            </form>
        </div>
    </div>
}
