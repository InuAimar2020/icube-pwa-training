import React from 'react'
import { Link } from 'react-router-dom'


const products = [
    { id: "123", name: "Bags 1.0", price: "Rp.340.000", img: '/img/bagsone.jpg'},
    { id: "456", name: "Bags 2.0", price: "Rp.650.000", img: '/img/bagstwo.jpg'},
    { id: "789", name: "Bags 3.0", price: "Rp.450.000", img: '/img/bagsthree.jpg'},
    { id: "101", name: "Bags 4.0", price: "Rp.550.000", img: '/img/bagsfour.jpg'},
    { id: "111", name: "Bags 5.0", price: "Rp.710.000", img: '/img/bagsfive.jpg'},
    { id: "112", name: "Bags 6.0", price: "Rp.350.000", img: '/img/bagssix.jpg'}
]

export default function Productlist() {
    return (
        <>
        {products.map((order, index) => (
        <div className="product-list" key={index}>
            <div className="product-item">
                <div className="product-img"><img src={order.img} alt="" /></div>
                <div className="product-info">
                    <div className="product-name">{order.name}</div>
                    <div className="price">{order.price}</div>
                    <div className="view"> <Link to={`/product?productNo=${order.id}&productName=${order.name}&productPrice=${order.price}&productImg=${order.img}`}>View Product</Link></div>
                </div>
            </div>
        </div>
    ))}
            
        </>
    )
}
