import React from "react";
import CountryList from "./CountryList";

//2. принимаем параметры из CountryList.js
const Country = (props) => {
    console.log(props)
    return (
        // можно докинуть стили после <div className="country">
        <tr className="country">

{/*1-Й ВАРИАНТ АДРЕСА АПИШКИ*/}
            <td>{props.country.id}</td>
            <td>{props.country.country}</td>
            <td>{props.country.region}</td>
            <td>{props.country.locality}</td>

{/*// 2-Й ВАРИАНТ АДРЕСА АПИШКИ*/}
            {/*<td>{props.country.id}</td>*/}
            {/*<td>{props.country.first_name}</td>*/}
            {/*<td>{props.country.last_name}</td>*/}
            {/*<td>{props.country.email}</td>*/}
            {/*<td>{props.country.avatar}</td>*/}
        </tr>
    );
};

export default Country;