import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faHeart, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
    return (
        <div className='navigation'>
            <div className='navigation__wrapper'>
                <div className="nav__logo">
                    <a href="#">
                        <h1>LOGO</h1>
                    </a>
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="#">Каталог
                            <FontAwesomeIcon className='arrow_down_icon' icon={faChevronDown} />
                        </a></li>
                        <li><a href="#">Доставка</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">Lookbooks</a></li>
                        <li><a href="#">Сравнение</a></li>
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
