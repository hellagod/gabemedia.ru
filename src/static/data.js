import gabeLogoImg from './icons/header-logo.png'
import gabeLogoFooterImg from './icons/footer-logo.png'
import gabeTickerImg from './icons/ticker-gabe.png'
import helloLineImg from './icons/hello-line.png'
import {ReactComponent as headerButtonIcon} from './icons/header-arrow-right.svg'
import {ReactComponent as ArrowRightUp} from './icons/arrow-right-up.svg'
import {ReactComponent as ArrowRight} from './icons/arrow-right.svg'
import {ReactComponent as TelegramIcon} from './icons/tg.svg'
import {ReactComponent as VKIcon} from './icons/vk.svg'
import sponsors from './sponsors';
import React from "react";
import teammates from "./teammates";


let data = {
    header: {
        menu: [{name: "О нас", scroll: null}, {name: "Услуги", scroll: null}, {name: "Команда", scroll: null}],
        logo: {
            img: gabeLogoImg, name: "GABE MEDIA"
        },
        button: {
            name: "Работать с нами", Icon: headerButtonIcon
        },
    },
    hello: {
        button: {
            name: "Обсудить проект"
        },
        MainText: ({innerRef}) => <div ref={innerRef} className="hello-text">
            Погружаем <br/>
            в мир <br className="br-1"/><span className="hello-text-span-1">стриминга</span>
            <br className="br-2"/> и <br className="br-1"/><span className="hello-text-span-2">киберспорта</span>
        </div>,
        AboutText: ({innerRef}) => <div ref={innerRef} className="hello-about">
            Gabe Media – рекламное агентство полного цикла <br className="br-2"/>
            в области игр, стриминга и киберспорта.<br/>
            Мы обеспечиваем вам доступ к топовым блогерам и создаем
            кампании, которые действительно работают.
        </div>,
        forHwo: ["киберспортсменам", "брендам", "стримерам", "блогерам"]
    },
    description: {
        card: {
            MainText: () => <div className="description-card-main-text">
                <span>Gabe Media</span><br className="br-1"/> — это опытная команда, <br className="br-2"/> которая
                сопровождает вас на&nbsp;всех этапах, <br className="br-2"/>
                от разработки стратегии до&nbsp;успешного запуска <br className="br-2"/> рекламных кампаний в&nbsp;сфере
                игр, стриминга <br className="br-2"/>
                и киберспорта.
            </div>,
            benefits: [{
                title: "1000 +", text: <div>блогеров в&nbsp;нашей базе, готовых продвигать ваш бренд</div>
            }, {
                title: "500 +", text: <div>успешных кампаний в&nbsp;сфере игр, стриминга и&nbsp;киберспорта</div>
            }, {
                title: "5 лет", text: <div>опыта в&nbsp;создании цифровых&nbsp;стратегий и&nbsp;креативных решений</div>
            }, {
                title: "24/7", text: <div>поддержка и&nbsp;контроль всех этапов кампании</div>
            }]
        },
        sponsors
    },
    offer: {
        title: "Что мы предлагаем?",
        toggle: {
            bloggers: {
                name: "Блогерам",
                text: <span><span>Полный пакет возможностей</span> —&nbsp;от продюсирования контента и&nbsp;мерча
                    до&nbsp;креативных рекламных кампаний и&nbsp;сотрудничества с&nbsp;брендами!</span>,
                services: [
                    ["Привлечение аудитории и увеличение вовлеченности", "Медиа-развитие"],
                    ["Разработка мерча", "Ведение соцсетей", "Продюсирование контента"],
                    ["Организация коллабораций", "Оформление и сопровождение сделок"],
                    ["Реализация интересных и креативных рекламных компаний", "Performance", "KPI", "Спецпроекты"],
                    ["Взаимодействие с рекламодателями", "Поиск рекламодателей"],
                    ["Реализация и контроль рекламной кампании"],
                    ["Аналитика и отчетность по итогам кампании"]
                ],
                servicesSmall: [
                    ["Привлечение аудитории и увеличение вовлеченности"],
                    ["Медиа-развитие"],
                    ["Разработка мерча"],
                    ["Ведение соцсетей", "Performance"],
                    ["Продюсирование контента"],
                    ["Организация коллабораций"],
                    ["Оформление и сопровождение сделок"],
                    ["Реализация интересных и креативных рекламных компаний"],
                    ["Взаимодействие с рекламодателями"],
                    ["Поиск рекламодателей"],
                    ["Реализация и контроль рекламной кампании"],
                    ["Аналитика и отчетность по итогам кампании"]
                ]
            },
            brands: {
                name: "Брендам",
                text: <span><span>Полный цикл продвижения</span> —&nbsp;от поиска топовых стримеров
                    и&nbsp;блогеров до&nbsp;реализации креативных кампаний с&nbsp;гарантированными
                    результатами!</span>,
                services: [
                    ["Поиск релевантных стримеров, блогеров и киберспортсменов", "Медиа-развитие"],
                    ["Разработка стратегии, тактики, креативной концепции рекламной кампании;", "Ведение соцсетей", "Продюсирование контента"],
                    ["Закупка медиаканалов в зависимости от потребностей рекламодателя", "Оформление и сопровождение сделок"],
                    ["Awareness", "Performance", "KPI", "Спецпроекты"],
                    ["Коммуникация и аккаунтинг лидеров мнений", "Поиск рекламодателей"],
                    ["Реализация и контроль рекламной кампании"],
                    ["Аналитика и отчетность по итогам кампании"]
                ],
                servicesSmall: [
                    ["Поиск релевантных стримеров, блогеров и киберспортсменов"],
                    ["Разработка стратегии, тактики, креативной концепции рекламной кампании;",],
                    ["Закупка медиаканалов в зависимости от потребностей рекламодателя"],
                    ["Awareness", "Performance"],
                    ["KPI", "Спецпроекты"],
                    ["Коммуникация и аккаунтинг лидеров мнений"],
                    ["Поиск рекламодателей"],
                    ["Реализация и контроль рекламной кампании"],
                    ["Аналитика и отчетность по итогам кампании"]
                ]
            }
        }
    },
    resources: {
        ticker: {
            title: "Gabe Media",
            img: gabeTickerImg
        },
        title:
            <span>Ваша реклама в&nbsp;руках лучших: доступ к&nbsp;
                <span className="emphasis">1000+ блогерам
            </span> с&nbsp;аудиторией от&nbsp;3&nbsp;тыс. <span
                    className="emphasis">до&nbsp;2&nbsp;млн подписчиков.</span></span>
    },
    team: {
        title: 'В нашей команде',
        teammates
    },
    workStyle: {
        title: "Как мы работаем?",
        steps: [
            {
                id: "(1)",
                title: <span>Погружаемся в&nbsp;проект</span>,
                text: <span>Мы внимательно изучаем ваш бриф, определяем цели и&nbsp;задачи,
                    создаем медиаплан, который точно направлен на&nbsp;ключевые каналы и&nbsp;нужные метрики.</span>
            },
            {},
            {
                id: "(2)",
                title: <span>Создаем материалы</span>,
                text: <span>Разрабатываем креативные материалы, которые цепляют,
                    и&nbsp;тщательно подготавливаем блогеров для&nbsp;успешного старта кампании.</span>
            },
            {},
            {
                id: "(3)",
                title: <span>Запускаем и&nbsp;контролируем</span>,
                text: <span>Запускаем и&nbsp;контролируем вашу рекламную кампанию с&nbsp;ювелирной точностью,
                    ежедневно оптимизируя её для достижения максимального результата.</span>
            },
            {},
            {
                id: "(4)",
                title: <span>Предоставляем аналитику</span>,
                text: <span>Предоставляем полный отчет по кампании с&nbsp;детализированной
                    аналитикой и&nbsp;стратегическими рекомендациями для&nbsp;дальнейшего роста вашего бренда.</span>
            }
        ]
    },
    special: {
        title: <span>Что делает нас <br/>особенными?</span>,
        cards: [
            {
                id: "\\\\01",
                title: <span>популярность киберспорта</span>,
                text: <span>\\ Мы работаем в&nbsp;быстро развивающейся сфере,
                    где инвестиции и&nbsp;интерес растут в&nbsp;2,5&nbsp;раза в&nbsp;год.</span>
            },
            {
                id: "\\\\02",
                title: <span>Доверие аудитории</span>,
                text: <span>\\ Стримеры активно общаются с&nbsp;аудиторией,
                    что создает крепкую связь и&nbsp;доверие.</span>
            },
            {
                id: "\\\\03",
                title: <span>Креативность форматов</span>,
                text: <span>\\ Используем нестандартные форматы и&nbsp;идеи, чтобы ваша кампания запомнилась.</span>
            },
            {
                id: "\\\\04",
                title: <span>Актуальные тренды</span>,
                text: <span>\\ Следим за&nbsp;последними трендами в&nbsp;индустрии и&nbsp;применяем их,
                    чтобы оставаться на&nbsp;шаг впереди.</span>
            }
        ]
    },
    feedback: {
        Title: () => <div className="feedback-title">
            Хотите начать<br/> <span>успешное <br/>продвижение</span><br/><span>в медиа?</span>
        </div>,
        form: {
            validation: "Обязательное поле",
            name: "Как вас зовут?",
            phone: "Номер телефона",
            email: "Почта",
            submit: "Обсудить проект",
            politics: <span>Нажимая на&nbsp;кнопку, вы даете согласие на&nbsp;обработку персональных данных и&nbsp;соглашаетесь c&nbsp;<span>политикой конфиденциальности</span></span>
        }
    },
    news:{
        subTitle: <span>Хочешь быть в теме игр?<br/>
            "Подпишись на горячие новости от Габена!</span>,
        title: "GABE NEWS"
    },
    footer:{
        logo: {
            name: "GABE MEDIA",
            img: gabeLogoFooterImg
        },
        menu: [{name: "О нас"}, {name: "Для блогеров"}, {name: "для брендов"},{name: 'Команда'}],
        politic: {
            name: "Политика конфиденциальности",
            email: "gabemedia@gmail.com"
        },
        copyR: "© Gabe Media 2024"
    },

    commonIcons: {
        ArrowRightUp, TelegramIcon, VKIcon, ArrowRight,
        helloLineImg
    }

}


export default data;