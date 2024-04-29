import {useState} from "react"
import {useNavigate} from "react-router-dom"

import Meta from "../Meta.jsx"

import "../../styles/Auth/SignIn.css"


function SignIn(props) {
    const [email, set_email] = useState('')
    const [password, set_password] = useState('')

    const navigate = useNavigate()

    const meta_title = 'Sign In | Gamor'

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log({email, password})
    }

    return (
        <>
            <Meta title={meta_title}/>
            <div className="sign-container">
                <div className="form-container">
                    <div className="header-form">
                        <h1 className="title-form">Sign In</h1>
                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label htmlFor="id_email">Email *</label>
                            <input type="text" className="form-input" id="id_email" value={email}
                                   onChange={(e) => set_email(e.target.value)}/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="id_password">Password *</label>
                            <input type="password" className="form-input" id="id_password" value={password}
                                   onChange={(e) => set_password(e.target.value)}/>
                        </div>
                        <div className="form-button-section">
                            <button type="button" className="sign-btn">Sign in</button>
                            <button type="button" className="sign-btn alternative-btn">Sign in with Google</button>
                        </div>
                    </form>
                    <div className="forgot-your-password">
                        <a href="/reset-password/" onClick={() => navigate('/reset-password/')}>Forgot your
                            password?</a>
                    </div>
                    <div className="sign-up">
                        <p>{'Don\'t have an account?'}</p>
                        <a href="/sign-up/" onClick={() => navigate('/sign-up/')}>Sign up</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn
