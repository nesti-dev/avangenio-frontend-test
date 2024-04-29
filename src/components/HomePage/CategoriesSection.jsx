import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

import "../../styles/HomePage/CategoriesSection.css"

import API from "../../services/api.js"


function CategoriesSection(props) {
    const [categories, set_categories] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        const api = new API()
        set_categories(api.get_categories())
    }, [])

    if (categories) {
        return (
            <div className="categories-container">
                <div className="categories-header">
                    <h2 className="categories-title">Trending categories</h2>
                </div>
                <div className="categories-grid">
                    {
                        categories.map((category, index) => (
                            <a href={category.link_to} key={index} onClick={() => navigate(category.link_to)}>
                                <div className="category-card" style={{backgroundImage: `url(${category.background})`}}>
                                    <h3 className="category-title">{category.name}</h3>
                                    <div className="category-filter"></div>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default CategoriesSection
