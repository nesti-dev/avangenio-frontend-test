import {useState} from "react";


function ThirdSection(props) {
    const [team, set_team] = useState()
    const [search, set_search] = useState()

    return (
        <div className="heading-section-container third-section-container">
            <div className="third-section-inner-container">
                <h3 className="third-section-title">01. <span>Choose Platform</span></h3>
                <div className="platform-selector">
                    <button
                        type="button"
                        className={`platform-selector-btn ${props.platform === 'party' ? 'active' : ''}`}
                        onClick={() => props.set_platform('party')}
                    >
                        Party
                    </button>
                    <button
                        type="button"
                        className={`platform-selector-btn ${props.platform === 'match' ? 'active' : ''}`}
                        onClick={() => props.set_platform('match')}
                    >
                        Matchs
                    </button>
                    <button
                        type="button"
                        className={`platform-selector-btn ${props.platform === 'stream' ? 'active' : ''}`}
                        onClick={() => props.set_platform('stream')}
                    >
                        Streams
                    </button>
                </div>
            </div>
            <div className="third-section-inner-container">
                <h3 className="third-section-title">02. <span>Searching Game</span></h3>
                <div className="game">
                    <h4 className="game-title">{props.game.name}</h4>
                    <div className="team-selector">
                        {
                            props.game.teams.map((team, index) => (
                                <div key={index} className="team">
                                    <div className="team-id">{index + 1}</div>
                                    <div className="team-title">{team.name}</div>
                                    <div>
                                        <button type="button" className="team-add-btn">
                                            <span>+</span>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button className="search-btn">Search</button>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection
