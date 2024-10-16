import {useEffect, useState} from "react";
import useScreenSize from "../../hooks/useScreenSize";

export default function FooterBack() {
    const [styles, setStyles] = useState({})
    const {isMobile} = useScreenSize();

    useEffect(() => {
        setStyles({
            line: {
                top: isMobile ? '326px' : '88px',
                height:isMobile ?"188px": "486px",
                width: '100%',
                left: 0
            },
            cross: {
                top: isMobile ? '476px': "416px",
                left:  isMobile ? '60%':'65%'
            },
            crossSmall:{
                top: isMobile ? '437px' : '397px',
                left:  isMobile ? '13%': '18%'
            }
        })
    }, [isMobile])
    return [
        <svg xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="none"
             style={styles.line}
             key="line"
             viewBox="0 0 1280 474" fill="none">
            <path vectorEffect="non-scaling-stroke"
                d="M-104.436 258.451C-29.7289 147.943 86.0376 288.548 118.395 380.328C153.705 480.481 295.354 504.535 364.067 425.232C406.206 376.598 459.001 307.072 548.928 358.601C628.601 404.255 680.302 425.151 743.076 342.696C805.85 260.242 831.546 206.485 935.946 240.494C1009.86 264.573 1071.65 411.375 1218.13 375.362C1364.6 339.349 1395.25 158.715 1385.54 0.177611"
                  stroke="#8420E8" strokeWidth="2"/>
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg"
             width="112" height="112"
             style={styles.cross}
             key="cross"
             viewBox="0 0 112 112" fill="none">
            <path d="M50.6832 33.836L69.411 1.3984L96.225 16.8794L77.4971 49.317L76.9971 50.1831L77.8631 50.6831L110.301 69.4109L94.8197 96.2249L62.3821 77.497L61.5161 76.997L61.0161 77.863L42.2882 110.301L15.4743 94.8196L34.2021 62.382L34.7021 61.516L33.8361 61.016L1.3985 42.2881L16.8795 15.4742L49.3171 34.202L50.1832 34.702L50.6832 33.836Z"
                  stroke="#CCF304" strokeWidth="2"/>
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg"
             width="42" height="39"
             style={styles.crossSmall}
             key="cross-small"
             viewBox="0 0 42 39" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.65827 0.161554L0.585221 9.2346L11.1704 19.8198L0.585223 30.405L9.65827 39.4781L20.2435 28.8929L30.8287 39.4781L39.9018 30.405L29.3165 19.8198L39.9018 9.2346L30.8287 0.161555L20.2435 10.7468L9.65827 0.161554ZM14.3231 19.8198L3.73787 30.4051L12.8109 39.4781L23.3961 28.8929L33.9814 39.4781L43.0544 30.4051L32.4692 19.8198L43.0544 9.23462L33.9814 0.161573L23.3961 10.7468L12.8109 0.161572L3.73787 9.23462L14.3231 19.8198ZM4.87429 9.23462L15.4595 19.8198L4.87429 30.4051L12.8109 38.3417L23.3961 27.7565L33.9814 38.3417L41.918 30.4051L31.3328 19.8198L41.918 9.23462L33.9814 1.29799L23.3961 11.8832L12.8109 1.29799L4.87429 9.23462Z" fill="#CCF304"
                  />

        </svg>

    ]
}