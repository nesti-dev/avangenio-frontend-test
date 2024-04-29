function SecondSection(props) {
    return (
        <div className="heading-section-container second-section-container">
            <div className="team-background-wrapper">
                <img src={props.game.background} alt="" className="team-background"/>
                <div className="team-background-filter"></div>
                <h2 className="team-background-title">{props.game.name}</h2>
            </div>
        </div>
    )
}

export default SecondSection
