import {useState} from "react"
import {useNavigate} from "react-router-dom"

import Meta from "../Meta.jsx"

import "../../styles/Auth/SignUp.css"


function SignUp(props) {
    const [name, set_name] = useState('')
    const [email, set_email] = useState('')
    const [password, set_password] = useState('')

    const navigate = useNavigate()

    const meta_title = 'Sign Up | Gamor'

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log({name, email, password})
    }

    return (
        <>
            <Meta title={meta_title}/>
            <div className="sign-container">
                <div className="form-container">
                    <div className="header-form">
                        <h1 className="title-form">Sign Up</h1>
                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label htmlFor="id_name">Name *</label>
                            <input type="text" className="form-input" id="id_name" value={name}
                                   onChange={(e) => set_name(e.target.value)}/>
                        </div>
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
                            <button type="button" className="sign-btn">Sign up</button>
                            <button type="button" className="sign-btn alternative-btn">Sign up with Google</button>
                        </div>
                        <div className="sign-in">
                            <p>Already have an account?</p>
                            <a href="/sign-in/" onClick={() => navigate('/sign-in/')}>Sign in</a>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default SignUp
