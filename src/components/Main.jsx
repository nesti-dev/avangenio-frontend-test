import {Routes, Route} from "react-router-dom"

import SignUp from "./Auth/SignUp.jsx"
import SignIn from "./Auth/SignIn.jsx"
import HomePage from "./HomePage/HomePage.jsx"

import "../styles/globals.css"


function Main(props) {
    return (
        <Routes>
            <Route path="/sign-in/" element={<SignIn/>}/>
            <Route path="/sign-up/" element={<SignUp/>}/>

            <Route path="/" element={<HomePage/>}/>
        </Routes>
    )
}

export default Main
