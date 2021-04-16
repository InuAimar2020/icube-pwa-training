import React from 'react'
import { Link, useRouteMatch } from "react-router-dom";
import Productlist from './Productlist'

const categories = [
    {id: 2, name:"New Arrivals", class:"new-arrivals"},
    {id: 3, name:"Best Sellers", class:"best-sellers"}
]

export default function CategoryList() {
    let { url } = useRouteMatch();
    return (
        <>
            {categories.map((order, index) => (
                <div className="category-product" key={index}>
                    <div className={order.class}>
                        <h1>{order.name}</h1>
                        <Productlist/>
                        <span className="view-more"><Link to={`${url}category/${order.id}`}>View More</Link></span>
                    </div>
                </div>
            ))}
        </>
    )
}
