import './App.css';
import logo from './img/logo.png'; // Tell webpack this JS file uses this image

function App() {
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
                                                О
                                                компаии
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
                <div className="App">
                    <main className="main">
                        <div className="container">
                            <div className="main-section">
                                <div className="header">
                                    <img src={logo} alt="background-image" className="logo"/>

                                    <nav className="nav">
                                        <ul className="nav-list">
                                            <li className="nav-list__item nav-list__item-editor">
                                                <input className="menu__list-link" value='Главная'/>
                                            </li>
                                            <li className="nav-list__item nav-list__item-editor">
                                                <input className="menu__list-link" value='Технология'/>
                                            </li>
                                            <li className="nav-list__item nav-list__item-editor">
                                                <input className="menu__list-link" value=' График
                                                    полетов'/>

                                            </li>
                                            <li className="nav-list__item nav-list__item-editor">
                                                <input className="menu__list-link" value='Гарантии'/>
                                            </li>
                                            <li className="nav-list__item nav-list__item-editor">
                                                <input className="menu__list-link" value=' О
                                                    компаии'/>
                                            </li>
                                            <li className="nav-list__item nav-list__item-editor">
                                                <input className="menu__list-link" value='Контакты'/>
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
                                            <div className="box-editor">
                                                <div className="box-editor-inner">
                                                    <input className="box__text box__text--top" value="Мы"/>
                                                    <input
                                                        className="input-editor box__number-center" value="1"/>
                                                    <input
                                                        className="box__text box__text--bottom" value="на рынке"/>
                                                </div>
                                            </div>

                                            <div className="box-editor">
                                                <div className="box-editor-inner">
                                                    <input className="box__text box__text--top" value="Гарантируем"/>
                                                    <input
                                                        className="input-editor box__number-center" value="50%"/>
                                                    <input
                                                        className="box__text box__text--bottom" value="безопастность"/>
                                                </div>
                                            </div>
                                            <div className="box-editor">
                                                <div className="box-editor-inner">
                                                    <input className="box__text box__text--top" value="календарики"/>
                                                    <input
                                                        className="input-editor box__number-center" value="2001"/>
                                                    <input
                                                        className="box__text box__text--bottom" value="в подарок"/>
                                                </div>
                                            </div>
                                            <div className="box-editor">
                                                <div className="box-editor-inner">
                                                    <input className="box__text box__text--top" value="путешествие"/>
                                                    <input
                                                        className="input-editor box__number-center" value="597"/>
                                                    <input
                                                        className="box__text box__text--bottom" value="дней"/>
                                                </div>
                                            </div>
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
