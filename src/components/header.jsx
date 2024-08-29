import React, { useState, useRef } from "react";
import { useClickOutside } from "./useClickOutside";
import logo1 from "../img/1.png";
import logo2 from "../img/2.png";
import logo3 from "../img/3.png";
import logo4 from "../img/4.png";
import logo5 from "../img/5.png";



// class Header extends React.Component {
//
//     render() {
//         return (
//         <header className="header">
//             {this.props.title}
//         </header>
//         )
//     }
//
// }
//
// export default Header

export default function Header() {
// ================================== переписать ================================== //
    const [isOpen, setOpen] = useState(false);
    const [isOpen3, setOpen3] = useState(false);
    const [isOpen4, setOpen4] = useState(false);

    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpen) setTimeout(() => setOpen(false), 50);
        if (isOpen3) setTimeout(() => setOpen3(false), 50);
        if (isOpen4) setTimeout(() => setOpen4(false), 50);
    });
// ================================================================================ //

    return (
        <header>
            <div className='size-lolo'>
                <a href="#">
                    <span className="icon0"></span>
                    <span className="logo"> СУТОЧНО.РУ</span>
                </a>
                <a href="#"><span className="cashback">КЭШБЭК 30%</span></a>


                <ul className='nav'>
                    <li className="menu_item">
                        <img src={logo1} className="icon"/>
                        <span className='menu_nav'>Сдать жильё</span>
                    </li>

                    <li className="menu_item">
                        <img src={logo2} className="icon"/>
                        <span className='menu_nav'>Бронирования</span>
                    </li>

                    <li className="menu_item" onClick={() => setOpen3(!isOpen3)}>
                        <img src={logo3} className="icon"/>
                        <span className='menu_nav'>Избранное</span>

                        <nav className={`drop-down_menu3 ${isOpen3 ? "active" : ""}`}>
                            <ul className="menu_list">
                                <li className="menu_item2">Войдите, чтобы посмотреть избранные объекты на любом устройстве.</li>
                                <button className="menu_item2">Войти</button>
                            </ul>
                        </nav>

                    </li>

                    <li className="menu_item" onClick={() => setOpen4(!isOpen4)}>
                        <img src={logo4} className="icon"/>
                        <span>Войти</span>
                        <nav className={`drop-down_menu4 ${isOpen4 ? "active" : ""}`}>
                            <ul className="menu_list">
                                <li className="menu_item2">Войдите или создайте аккаунт, чтобы использовать все возможности сервиса</li>
                                <li className="menu_item2">Войти</li>
                            </ul>
                        </nav>
                    </li>


                    <button className="menu-button" onClick={() => setOpen(!isOpen)}>
                        <img src={logo5} className="icon5"/>
                    </button>
                    {/*<nav className={`drop-down_menu5 ${isOpen ? "active" : ""}`}>*/}
                    <nav className={`drop-down_menu5 ${isOpen ? "active" : ""}`} ref={menuRef}>
                        <ul className="menu_list">
                            <li className="menu_item2">Вопросы и ответы</li>
                            <li className="menu_item2">Служба поддержки</li>
                            <li className="menu_item2">+37529 0000001</li>
                        </ul>
                    </nav>
                </ul>
            </div>
        </header>

    )
}