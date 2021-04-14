import React from "react";
import { useParams } from "react-router-dom";
import Productlist from '../components/Productlist'

export default function CategoryPage() {
    let { categoryId } = useParams();
    if (categoryId == 2) {
        categoryId = "New Arrival";
    } else if (categoryId == 3) {
        categoryId = "Best Seller";
    }
    return (
        <div className="category-page">
            <div className="title"><h1>{categoryId}</h1></div>
            <Productlist />
        </div>
    );
}