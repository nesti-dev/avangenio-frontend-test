import {Helmet} from "react-helmet"


function Meta(props) {
    return (
        <Helmet>
            {
                props.title ? <title>{props.title}</title> : null
            }
            {
                props.description ? <meta name="description" content={props.description}/> : null
            }
        </Helmet>
    )
}

export default Meta
