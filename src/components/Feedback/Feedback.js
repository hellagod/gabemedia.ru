import React, {useState} from 'react';
import './Feedback.css';
import data from "../../static/data";
import FeedbackBack from "./FeedbackBack";
import Email from "../../static/Email";

let {feedback: {Title, form}, commonIcons: {ArrowRight}} = data


export default function Feedback({feedRef}) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    function handleVoid() {
        setEmail("")
        setPhone("")
        setName("")
    }

    return <div ref={feedRef} className="feedback">
        <FeedbackBack/>
        <div className="feedback-card">
            <Title/>
            <form action="javascript:void(0);" onSubmit={() => {
                Email.send({
                    SecureToken: "46749110-8a49-42ca-bcfb-1f102f7cedbd",
                    To: "info@gabemedia.ru",
                    From: "info@gabemedia.ru",
                    Subject: "GabeMedia",
                    Body: `Имя: ${name}<br>Телефон: ${phone}<br>Почта: ${email}`,
                })
                    .then(function (message) {
                        if (message === "OK") {
                            alert('Форма успешно отправлена')
                            handleVoid()
                        } else {
                            alert('Что-то пошло не так')
                            console.log(message)
                        }
                    });
                return true
            }} className="feedback-form">
                <input className="feedback-form-input" value={name} onChange={e => setName(e.target.value)} placeholder={form.name} type="name" required/>
                <input className="feedback-form-input" value={phone} onChange={e => setPhone(e.target.value)} placeholder={form.phone} type="phone" required/>
                <input className="feedback-form-input" value={email} onChange={e => setEmail(e.target.value)} placeholder={form.email} type="email" required/>
                <button className="feedback-form-input" type="submit">{form.submit}<span
                    className="feedback-form-input-icon"><ArrowRight/></span></button>
                <div className="feedback-form-politics">
                    {form.politics}
                </div>
            </form>
        </div>
    </div>
}
