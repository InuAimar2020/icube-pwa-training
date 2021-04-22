import { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Container, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import { withApollo } from "../../lib/apollo";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/action/cart";
import NumberFormat from "react-number-format";

const PRODUCT_PAGE = gql`
  query HomeCategory($ids: String!) {
    products(pageSize: 1, filter: { sku: { eq: $ids } }) {
      total_count
      items {
        categories {
          description
          name
          id
        }
        id
        name
        sku
        description {
          html
        }
        price {
          maximalPrice {
            amount {
              currency
              value
            }
          }
          minimalPrice {
            amount {
              currency
              value
            }
          }
          regularPrice {
            amount {
              currency
              value
            }
          }
        }
        url_key
        image {
          url
        }
      }
    }
  }
`;

const ProductPage = (props) => {
    const [count, setCount] = useState(1);

    function addCount(inc) {
        setCount(count + inc);
    }

    function minusCount(inc) {
        if (count >= 2) {
            setCount(count - inc);
        }
    }

    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    const { loading, error, data } = useQuery(PRODUCT_PAGE, {
        variables: { ids: id },
        // fetchPolicy: 'no-cache'
    });

    if (loading) {
        return <div>loading...</div>;
    }

    const productpage = data.products.items;

    const handleAdd = (
        productId,
        productName,
        productImage,
        productPrice,
        productQty
    ) => {
        dispatch(
            addProduct({
                id: productId,
                name: productName,
                img: productImage,
                price: productPrice,
                qty: productQty,
            })
        );
    };

    return (
        <Container>
            {productpage.map((val, idx) => {
                return (
                    <div className="productpage-container">
                        <div className="gallery">
                            <img src={val.image.url} alt={val.name} />
                        </div>
                        <div className="product-info">
                            <div className="name">
                                <Typography>
                                    <h1>{val.name}</h1>
                                </Typography>
                            </div>
                            <Typography>
                                <div className="sku">sku: #{val.sku}</div>
                            </Typography>
                            <Typography>
                                <div className="price">
                                    <NumberFormat
                                        value={val.price.regularPrice.amount.value}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$. "}
                                    />
                                </div>
                            </Typography>
                            <div className="action-secondary">
                                <button className="minus-button" onClick={() => minusCount(1)}>
                                    -
                </button>
                                <span className="count">{count}</span>
                                <button className="plus-button" onClick={() => addCount(1)}>
                                    +
                </button>
                            </div>
                            <div className="action-primary">
                                <span className="add-to-cart">
                                    <button
                                        onClick={() =>
                                            handleAdd(
                                                val.sku,
                                                val.name,
                                                val.image.url,
                                                val.price.regularPrice.amount.value,
                                                count
                                            )
                                        }
                                    >
                                        <Typography>Add to Cart</Typography>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="description">
                            <span className="title">Description :</span>
                            <p>{val.description.html}</p>
                        </div>
                    </div>
                );
            })}
        </Container>
    );
};

export default withApollo({ ssr: true })(ProductPage);
