import './App.css';
import logo from './img/logo.png';
import {useEffect, useState} from "react"; // Tell webpack this JS file uses this image

function App() {

    const [navValue, setNavValue] = useState([
        {
            title: 'nav-main',
            text: 'Главная',
            link: '#'
        },
        {
            title: 'nav-tech',
            text: 'Технология',
            link: '#'
        },
        {
            title: 'nav-graph',
            text: 'График полетов',
            link: '#'
        },
        {
            title: 'nav-grant',
            text: 'Гарантии',
            link: '#'
        },
        {
            title: 'nav-about',
            text: 'О компании',
            link: '#'
        },
        {
            title: 'nav-contact',
            text: 'Контакты',
            link: '#'
        }
    ])


    const [cardValue, setCardValue] = useState([
        {
            title: 'card-shop',
            topText: 'Мы',
            num: '1',
            bottomText: 'на рынке'
        },
        {
            title: 'card-grant',
            topText: 'Гарантируем',
            num: '50%',
            bottomText: 'безопастность'
        },
        {
            title: 'card-cal',
            topText: 'календарики',
            num: '2001',
            bottomText: 'в подарок'
        },
        {
            title: 'card-travel',
            topText: 'путешествие',
            num: '597',
            bottomText: 'дней'
        }
    ])


    const [save, setSave] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            const reqData = await fetch('http://127.0.0.1:8000/api/main', {
                method: "POST",
                body: JSON.stringify([navValue, cardValue]),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', // Set the content type to JSON if required
                },
            })
            const pendJSON = await reqData.json()
            setNavValue(pendJSON[0])
            setCardValue(pendJSON[1])
        }
        fetchData()
    }, [save])


    const handlerInput = (e) => {
        const {name, value} = e.target;
        if (name.split('-')[0] === 'nav') {
            const idx = navValue.findIndex((item) => item.title === name)
            const elArr = navValue[idx]
            const inpValue = value.split('!')
            elArr.text = inpValue[0]
            elArr.link = inpValue[1]
            elArr.title = name
            const newArrayNav = navValue
            newArrayNav[idx] = elArr
            setNavValue(prevFormData => {
                return [
                    ...newArrayNav
                ]
            });
        } else {
            const idx = cardValue.findIndex((item) => item.title === name.split('!')[0])
            const elArr = cardValue[idx]
            elArr.topText = name.split('!')[1] === "top" ? value : elArr.topText
            elArr.num = name.split('!')[1] === "num" ? value : elArr.num
            elArr.bottomText = name.split('!')[1] === "bottom" ? value : elArr.bottomText
            const newArrayNav = cardValue
            newArrayNav[idx] = elArr
            setCardValue(prevFormData => {
                return [
                    ...newArrayNav
                ]
            });
        }

    }
    const handlerClickedSave = () => {
        setSave(!save)
    }

    if (window.location.pathname !== '/admin') {
        return (
            <div className="App">
                <main className="main">
                    <div className="container">
                        <div className="main-section">
                            <div className="header">
                                <img src={logo} alt="background-image" className="logo"/>

                                <nav className="nav">
                                    <ul className="nav-list">
                                        <li className="nav-list__item">
                                            <a className="menu__list-link" href="#">
                                                Главная
                                            </a>
                                        </li>
                                        <li className="nav-list__item">
                                            <a className="menu__list-link" href="#">
                                                Технология
                                            </a>
                                        </li>
                                        <li className="nav-list__item">
                                            <a className="menu__list-link" href="#">
                                                График
                                                полетов
                                            </a>
                                        </li>
                                        <li className="nav-list__item">
                                            <a className="menu__list-link" href="#">
                                                Гарантии
                                            </a>
                                        </li>
                                        <li className="nav-list__item">
                                            <a className="menu__list-link" href="#">
                                                О компании
                                            </a></li>
                                        <li className="nav-list__item">
                                            <a className="menu__list-link" href="#">
                                                Контакты
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="about">
                        <div className="container">
                            <div className="about-section">
                                <div className="about-title">
                                    <h1 className="title">Путешествие</h1>
                                    <span className="subtitle">на красную планету</span>
                                    <button className="btn-travel" type="button">
                                        Начать путешествие
                                    </button>
                                </div>
                                <div className="about-desc">
                                    <div className="desc">
                                        <div className="box">
                                            <div className="box-inner">
                                                <span className="box__text box__text--top">Мы</span>
                                                <span
                                                    className="box__number-center">1</span>
                                                <span
                                                    className="box__text box__text--bottom">на рынке</span>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="box-inner">
                                                <span className="box__text box__text--top">Гарантируем</span>
                                                <span
                                                    className="box__number-center">50%</span>
                                                <span
                                                    className="box__text box__text--bottom">безопастность</span>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="box-inner">
                                                <span className="box__text box__text--top">календарики</span>
                                                <span
                                                    className="box__number-center">2001</span>
                                                <span
                                                    className="box__text box__text--bottom">в подарок</span>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="box-inner">
                                                <span className="box__text box__text--top">путешествие</span>
                                                <span
                                                    className="box__number-center">597</span>
                                                <span
                                                    className="box__text box__text--bottom">дней</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    } else {
        // * Admin Panel
        return (
            <>
                  <div className="save-panel" style={{position: "absolute", right: 0}}>
                                <button onClick={handlerClickedSave}>Save</button>
                            </div>
                <div className="App">
                    <main className="main">
                        <div className="container">
                            <div className="main-section">
                                <div className="header">
                                    <img src={logo} alt="background-image" className="logo"/>

                                    <nav className="nav">
                                        <ul className="nav-list">

                                            {
                                                navValue.map((item) => {
                                                    return (<li className="nav-list__item nav-list__item-editor">
                                                        <input className="menu__list-link"
                                                               name={item.title}
                                                               value={item.text + '!' + item.link}
                                                               onChange={handlerInput}
                                                               placeholder={'Enter Text!Link..'}/>
                                                    </li>)
                                                })
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="about">
                            <div className="container">
                                <div className="about-section">
                                    <div className="about-title">
                                        <h1 className="title">Путешествие</h1>
                                        <span className="subtitle">на красную планету</span>
                                        <button className="btn-travel" type="button">
                                            Начать путешествие
                                        </button>
                                    </div>
                                    <div className="about-desc">
                                        <div className="desc">

                                            {
                                                (cardValue.map((item) => {
                                                    return (
                                                        <div className="box-editor">
                                                            <div className="box-editor-inner">
                                                                <input className="box__text box__text--top"
                                                                       name={item.title + '!top'}
                                                                       onChange={handlerInput}
                                                                       value={item.topText}/>
                                                                <input
                                                                    className="input-editor box__number-center"
                                                                    name={item.title + '!num'}
                                                                    value={item.num}
                                                                    onChange={handlerInput}
                                                                />
                                                                <input
                                                                    className="box__text box__text--bottom"
                                                                    name={item.title + '!bottom'}
                                                                    onChange={handlerInput}
                                                                    value={item.bottomText}/>
                                                            </div>
                                                        </div>
                                                    )
                                                }))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

            </>
        )
    }
}

export default App;
