import React, {useState} from "react";
import logo6 from "../img/search.svg";
// -------------------------------------

import axios from "axios";
import CountryList from "./CountryList";

const API_URL = 'http://127.0.0.1:8000/api/data/'


export default function Ssearch() {


    // -------------------------------------
    //.2. Связывание
    const [countrys, setCountrys] = useState([])
    //.1. берем Страны
    //     в терминале устанавливаем библиотеку    npm i axios
    async function getCountrys() {
        const response = await axios.get(API_URL)
        setCountrys(response.data)
    }

    // 2-37-20 - 2-40-03
    // const removeCountry = (country) => {
    //     setCountrys(countrys.filter(c => c.id !== country.id))
    //     axios.delete(API_URL + country.id.toString() + '/')
    // }

    // 2-40-05 - 2-43-35
    // const editDone = (country, done) => {
    //     const allWithoutMentioned = countrys.filter(c => c.id !== country.id)
    //     country.done = done
    //     setCountrys([...allWithoutMentioned, country].sort((country1, country2) => {
    //         return country1.id - country2.id
    //     }))
    //
    // }


    // -------------------------------------


    return (
        <content className="search">

            <div className="search_header">
                <h1>Найдём, где остановиться!</h1>
                <p>Квартиры, отели, гостевые дома — 300 тысяч вариантов для поездок по России и зарубежью</p>
            </div>


            <nav className="search_menu">
                <ul className="search_menu_list">

                    <li className="search_menu_item">
                        {/*<BsFillPersonFill className="icon" />*/}
                        <span>Курорт, город или адрес</span>
                        {/*<button>Куда едем</button>*/}
                        <button onClick={getCountrys}>Куда едем</button>
                        <CountryList countrys={countrys}/>
                        {/*<CountryList countrys={countrys} remove={removeCountry} editDone={editDone}/>*/}

                    </li>
                    <li className="search_menu_item">
                        {/*<BsFillPersonFill className="icon" />*/}
                        <span>Заезд</span>
                        <button>Когда</button>
                    </li>
                    <li className="search_menu_item">
                        {/*<BsFillPersonFill className="icon" />*/}
                        <span>Отъезд</span>
                        <button>Когда</button>
                    </li>
                    <li className="search_menu_item">
                        {/*<BsFillPersonFill className="icon" />*/}
                        <span>Гости</span>
                        <button>,,,,,,,,,</button>
                    </li>
                    <li className="search_menu_item_search">

                        <button><img src={logo6} className="icon6"/></button>
                    </li>

                </ul>
            </nav>


            <div className="search_example_city">
                <span>Например
                    <button>Санкт-Петербург</button>
                    <button>Москва</button>
                    <button>Сочи</button>
                    <button>Минск</button>
                    <button>Казань</button>
                    <button>Дагестан</button>
                    <button>Кисловодск</button>
                    <button>Абхазия</button>
                </span>
            </div>

        </content>
    );
}

