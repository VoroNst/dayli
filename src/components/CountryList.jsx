import React from "react";
import Country from "./Country";

//1. принимаем параметры из App.js
const CountryList = ({countrys, removeCountry, editDone}) => {
    if (!countrys.length){
        return
    }

    return (
        <div>
            <table className="table" style={{width:"10%"}} >
                {/*<thead>*/}
                {/*<tr>*/}
                {/*    <th scope="col_id">Номер записи</th>*/}
                {/*    <th scope="col_country">Страна</th>*/}
                {/*    <th scope="col_region">Область</th>*/}
                {/*    /!*<th scope="col_locality">Населённый пункт</th>*!/*/}
                {/*</tr>*/}
                {/*</thead>*/}
                <tbody>
                    {/*{countrys.map(country => <Country country={country} key={country.id} remove={removeCountry} editDone={editDone}/>)}*/}
                    {countrys.map(country => <Country country={country} key={country.id} />)}
                </tbody>
            </table>
        </div>
    );
};

export default CountryList;