
import React, {useState} from "react";


import Header from "./components/header";

import Presentation from "./components/presentation";
// import Presentation from "./components/presentation2";
// import Presentation from "./components/presentation2_2";

// import axios from "axios";
// import Country from "./components/Country";
// import CountryList from "./components/CountryList";
import Footer from "./components/footer";



// const API_URL = 'http://127.0.0.1:8000/api/data/'

function App() {
    // //.2. Связывание
    // const [countrys, setCountrys] = useState([])
    // //.1. берем Страны
    // //     в терминале устанавливаем библиотеку    npm i axios
    // async function getCountrys() {
    //     const response = await axios.get(API_URL)
    //     setCountrys(response.data)
    // }
    //
    // // 2-37-20 - 2-40-03
    // const removeCountry = (country) => {
    //     setCountrys(countrys.filter(c => c.id !== country.id))
    //     axios.delete(API_URL + country.id.toString() + '/')
    // }
    //
    // // 2-40-05 - 2-43-35
    // const editDone = (country, done) => {
    //     const allWithoutMentioned = countrys.filter(c => c.id !== country.id)
    //     country.done = done
    //     setCountrys([...allWithoutMentioned, country].sort((country1, country2) => {return country1.id - country2.id}))
    //
    // }
    return (
        <div className="App">
            <Header/>
            <Presentation/>

            {/*<Footer/>*/}

            {/*<button style = {{color: 'brown'}}onClick={getCountrys}>Обновить список стран</button>*/}
            {/*<CountryList countrys={countrys} remove={removeCountry} editDone={editDone}/>*/}

        </div>
    );
}

export default App;
