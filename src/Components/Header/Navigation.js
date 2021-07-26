import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faHeart, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='navigation'>
            <div className='navigation__wrapper'>
                <div className="nav__logo">
                    <Link to='/'>
                        <h1>LOGO</h1>
                    </Link>
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <Link to="/categories">Каталог
                                <FontAwesomeIcon className='arrow_down_icon' icon={faChevronDown} />
                            </Link>
                        </li>
                        <li>
                            <Link to="/delivery">Доставка</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Контакты</Link>
                        </li>
                        <li>
                            <Link to="/lookbooks">Lookbooks</Link>
                        </li>
                        <li>
                            <Link to="/comparison">Сравнение</Link>
                        </li>
                    </ul>
                </div>
                <div className='nav_icons'>
                    <ul>
                        <button>
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation
