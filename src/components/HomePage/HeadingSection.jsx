import {useEffect, useState} from "react"

import FirstSection from "./FirstSection.jsx"
import SecondSection from "./SecondSection.jsx"
import ThirdSection from "./ThirdSection.jsx"

import "../../styles/HomePage/HeadingSection.css"

import API from "../../services/api.js"


function HeadingSection(props) {
    const [platform, set_platform] = useState('party')
    const [games, set_games] = useState([])
    const [game, set_game] = useState()

    useEffect(() => {
        const api = new API()
        set_games(api.get_games())
    }, [])

    useEffect(() => {
        set_game(games.filter(game => game.platform === platform)[0])
    }, [games, platform])

    if (game) {
        return (
            <div className="heading-container">
                <div className="heading-section-wrapper">
                    <FirstSection/>
                    <SecondSection
                        game={game}
                    />
                    <ThirdSection
                        platform={platform} set_platform={set_platform}
                        game={game} set_game={set_game}
                        games={games}
                    />
                </div>
            </div>
        )
    }
}

export default HeadingSection
