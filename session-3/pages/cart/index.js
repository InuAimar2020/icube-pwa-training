import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import NumberFormat from "react-number-format";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { Container, Typography } from "@material-ui/core";
import Link from "next/link";
import { removeProduct } from "../../redux/action/cart";

const CartPage = () => {
    const dataCart = useSelector((state) => state.cart);
    const subTotal = dataCart.cart.reduce(
        (totalPrice, product) => totalPrice + product.price * product.qty,
        0
    );

    const dispatch = useDispatch();
    const handleRemove = (productId) => {
        dispatch(
            removeProduct({
                id: productId,
            })
        );
    };

    return (
        <Container>
            <div className="cartpage-container">
                <div className="title">
                    <h1>Cart Page</h1>
                </div>
                {dataCart && dataCart.cart.length > 0 ? (
                    dataCart.cart.map((item, index) => (
                        <div className="item" key={index}>
                            <div className="images">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="info">
                                <Typography>
                                    {" "}
                                    <div className="product-name">
                                        <Link href="/product/[id]" as={"/product/" + item.id}>
                                            <a>
                                                <Typography>{item.name}</Typography>
                                            </a>
                                        </Link>
                                    </div>
                                </Typography>
                                <Typography>
                                    <span>sku : {item.id}</span>
                                </Typography>
                                <div className="price">
                                    <Typography>
                                        <NumberFormat
                                            value={item.price}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$ "}
                                        />
                                    </Typography>
                                </div>
                                <div className="total">
                                    <Typography>
                                        <span>Qty : {item.qty}</span>
                                    </Typography>
                                </div>
                            </div>
                            <div className="subtotal">
                                <Typography>
                                    <NumberFormat
                                        value={item.price * item.qty}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$ "}
                                    />
                                </Typography>
                            </div>
                            <button
                                onClick={() => handleRemove(item.id)}
                                className="action-delete"
                            >
                                <DeleteOutlineOutlinedIcon style={{ color: "#08C" }} />
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="empty-cart">No item</div>
                )}

                {
                    <div className="grand-total">
                        <Typography>
                            <span className="label">Total :</span>
                        </Typography>
                        <Typography>
                            <span className="price">
                                <NumberFormat
                                    value={subTotal}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$ "}
                                />
                            </span>
                        </Typography>
                    </div>
                }
            </div>
        </Container>
    );
};

export default connect()(CartPage);
