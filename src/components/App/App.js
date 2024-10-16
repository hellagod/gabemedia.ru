import './App.css';
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import {useEffect, useRef, useState} from "react";
import Hello from "../Hello/Hello";
import Description from "../Description/Description";
import Offer from "../Offer/Offer";
import Resources from "../Resources/Resources";
import Team from "../Team/Team";
import WorkStyle from "../WorkStyle/WorkStyle";
import Special from "../Special/Special";
import Feedback from "../Feedback/Feedback";
import News from "../News/News";
import Footer from "../Footer/Footer";
import data from "../../static/data";
import {Helmet} from "react-helmet";
import dark from '../../static/favicon-dark.png';
import light from '../../static/favicon.png'

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [isBlogger, setIsBlogger] = useState(false)
    const [mode, setMode] = useState(false)
    const helloRef = useRef()
    const descRef = useRef()
    const offerRef = useRef()
    const teamRef = useRef()
    const feedRef = useRef()

    useEffect(() => {
        const matcher = window.matchMedia("(prefers-color-scheme: dark)");
        setMode(matcher.matches)
        matcher.onchange = () => setMode(matcher.matches);
    }, []);

    useEffect(() => {
        let props = {behavior: 'smooth', block: 'center'}
        let f = (r) => r.current.scrollIntoView(props)
        data.footer.menu[0].scroll = () => f(helloRef)
        data.footer.menu[1].scroll = () => {
            setIsBlogger(true)
            f(offerRef)
        }
        data.footer.menu[2].scroll = () => {
            setIsBlogger(false)
            f(offerRef)
        }
        data.footer.menu[3].scroll = () => f(teamRef)

        data.header.menu[0].scroll = () => f(descRef)
        data.header.menu[1].scroll = () => f(offerRef)
        data.header.menu[2].scroll = () => f(teamRef)

        data.header.button.scroll = () => {
            setIsOpen(false)
            f(feedRef)
        }
        data.hello.button.scroll = () => {
            setIsOpen(false)
            f(feedRef)
        }
    }, [])
    return <div className="app" style={{overflowY: isOpen ? 'hidden' : 'auto'}}>
        <Helmet>
            <link rel="icon" href={mode ? dark : light}/>
            <title>GABE MEDIA</title>
            <meta name="description" content="GABE MEDIA - Погружаем в мир стриминга и киберспорта"/>
            <meta itemProp="name" content="GABE MEDIA"/>
            <meta itemProp="description" content="GABE MEDIA - Погружаем в мир стриминга и киберспорта"/>
            <meta property="og:title" content="GABE MEDIA"/>
            <meta property="og:description" content="GABE MEDIA - Погружаем в мир стриминга и киберспорта"/>
            <meta name="twitter:title" content="GABE MEDIA" />
            <meta name="twitter:description" content="GABE MEDIA - Погружаем в мир стриминга и киберспорта" />
        </Helmet>
        <div className={`app-content ${isOpen ? 'blur' : ''}`}>

            <Hello helloRef={helloRef}/>
            <Description descRef={descRef}/>
            <Offer isBlogger={isBlogger} setIsBlogger={setIsBlogger} offerRef={offerRef}/>
            <Resources/>
            <Team teamRef={teamRef}/>
            <WorkStyle/>
            <Special/>
            <Feedback feedRef={feedRef}/>
            <News/>
            <Footer/>
            <Header/>
        </div>
        <SideMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
}

export default App;
