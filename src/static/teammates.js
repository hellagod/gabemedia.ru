import {ReactComponent as Tw} from "./icons/tw.svg";
import {ReactComponent as Yt} from "./icons/yt.svg";
import {ReactComponent as Tg} from "./icons/tg.svg";
import stray from "./icons/teammates/stray228.png"
import ybic from "./icons/teammates/ybic.png"
import csgo from "./icons/teammates/csgo.png"
import good from "./icons/teammates/good.png"
import ltw from "./icons/teammates/ltw.png"
import traw from "./icons/teammates/trav.png"

let teammates = [
    {
        name: "Stray228", statistics: [{
            type: "tw",
            Icon: Tw, href: "https://www.twitch.tv/stray228?sr=a", audience: "1.5 млн", id: 0
        }, {
            type: "tg",
            Icon: Tg, href: "https://t.me/StrayDungeon228", audience: "124k", id: 2
        }, {
            type: "yt",
            Icon: Yt, href: "https://www.youtube.com/@StrayBest", audience: "74k", id: 1
        }],
        photo: stray
    }, {
        name: "ybicanoooobov", statistics: [{
            type: "tw",
            Icon: Tw, href: "https://www.twitch.tv/ybicanoooobov", audience: "664k", id: 0
        }, {
            type: "tg",
            Icon: Tg, href: "https://t.me/YBNFedor", audience: "25k", id: 2
        }, {
            type: "yt",
            Icon: Yt, href: "https://www.youtube.com/@ybicanoooobov", audience: "17k", id: 1
        }],
        photo: ybic
    }, {
        name: "TPaBoMaH", statistics: [{
            type: "tw",
            Icon: Tw, href: "https://www.twitch.tv/tpabomah", audience: "540k", id: 0
        }, {
            type: "yt",
            Icon: Yt, href: "https://youtube.com/@tpabomah_?si=LRzcBjSEZbFXhzjx", audience: "390k", id: 1
        }, {
            type: "tg",
            Icon: Tg, href: "https://t.me/travobet", audience: "136k", id: 2
        }],
        photo: traw
    }, {
        name: "Goodwin", statistics: [{
            type: "yt",
            Icon: Yt, href: "https://youtube.com/@GoodWINLive?si=uea6_yadNnfZ017H", audience: "567k", id: 1
        }, {
            type: "tg",
            Icon: Tg, href: "https://t.me/goodwin_bets", audience: "51k", id: 2
        }, {
            type: "tw",
            Icon: Tw, href: "https://www.twitch.tv/goodwin_dota?sr=a", audience: "46k", id: 0
        },],
        photo: good
    }, {
        name: "ILTW", statistics: [{
            type: "tw",
            Icon: Tw, href: "https://www.twitch.tv/iltw1", audience: "192k", id: 0
        }, {
            type: "tg",
            Icon: Tg, href: "https://t.me/iltw123", audience: "2k", id: 2
        }, {
            type: "yt",
            Icon: Yt, href: "https://www.youtube.com/c/iLTW1", audience: "1k", id: 1
        }],
        photo: ltw
    }, {
        name: "CS GO NEWS", statistics: [{
            type: "yt",
            Icon: Yt, href: "https://youtube.com/@CSGONEWSru?si=HXoKpJ0in3raHMha", audience: "455k", id: 1
        }, {
            type: "tg",
            Icon: Tg, href: "https://t.me/newcsgo", audience: "145k", id: 2
        }, {
            type: "tw",
            Icon: Tw, href: "https://www.twitch.tv/step_csgonews", audience: "4k", id: 0
        },],
        photo: csgo
    }
]

export default teammates;