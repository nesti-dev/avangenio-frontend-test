import Meta from "../Meta.jsx"
import HeadingSection from "./HeadingSection.jsx"
import CategoriesSection from "./CategoriesSection.jsx"


function HomePage(props) {
    const meta_title = 'Home | Gamor'
    const meta_description = 'Start streaming games differently'

    return (
        <main>
            <Meta title={meta_title} description={meta_description}/>
            <HeadingSection/>
            <CategoriesSection/>
        </main>
    )
}

export default HomePage
