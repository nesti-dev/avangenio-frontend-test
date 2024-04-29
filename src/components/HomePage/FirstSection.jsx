import {useNavigate} from "react-router-dom";


function FirstSection(props) {
    const navigate = useNavigate();

    return (
        <div className="heading-section-container first-section-container">
            <h2 className="first-section-title">Start <span>streaming</span> games differently</h2>
            <p className="first-section-subtitle">gamor now has <span>stream party</span> platform</p>
            <div className="first-section-btn">
                <button type="button" className="sign-up-btn" onClick={() => navigate('/sign-up/')}>Sign up</button>
                <button type="button" className="sign-in-btn" onClick={() => navigate('/sign-in/')}>Sign in</button>
            </div>
        </div>
    )
}

export default FirstSection
