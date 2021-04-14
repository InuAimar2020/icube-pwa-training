import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function ProductPage() {
    let query = new URLSearchParams(useLocation().search);
    const [count, setCount] = useState(1);

    function addCount(inc) {
        setCount(count + inc)
    }

    function minusCount(inc) {
        if (count >= 2) {
            setCount(count - inc)
        }
    }

    return (
        <div className="product-page">
            <div className="product-image">
                <img src={query.get("productImg")} alt={query.get("productName")} />
            </div>
            <div className="product-info">
                <div className="name">{query.get("productName")}</div>
                <div className="sku">sku: #{query.get("productNo")}</div>
                <div className="price">{query.get("productPrice")}</div>
                <div className="action-secondary">
                    <button className="minus-button" onClick={() => minusCount(1)}>-</button>
                    <span className="count">{count}</span>
                    <button className="plus-button" onClick={() => addCount(1)}>+</button>
                </div>
                <div className="action-primary">
                    <span className="add-to-cart"><Link to="/cart">Add to Cart</Link></span>
                </div>
                <div className="description">
                    <span className="title">
                        Description :
                    </span>
                    <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                </div>
            </div>
        </div>
    );
}