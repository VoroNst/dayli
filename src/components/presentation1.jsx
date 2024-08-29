import React, {useState} from "react";
import logo6 from "../img/search.svg";
// -------------------------------------

import axios from "axios";
import CountryList from "./CountryList";

const API_URL = 'http://127.0.0.1:8000/api/data/'


export default function Ssearch() {


    // -------------------------------------
    //.2. Связывание
    const [countries, setCountries] = useState([])
    //.1. берем Страны
    //     в терминале устанавливаем библиотеку    npm i axios
    async function getCountries() {
        const response = await axios.get(API_URL)
        setCountries(response.data)
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
                        <span>Курорт, город или адрес</span>
                        <button onClick={getCountries}>Куда едем</button>
                        <CountryList countrys={countries}/>
                        {/*<CountryList countrys={countrys} remove={removeCountry} editDone={editDone}/>*/}

                    </li>
                </ul>
            </nav>

        </content>
    );
}

