import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { withApollo } from "../../lib/apollo";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/action/cart";
import NumberFormat from "react-number-format";
import useStyles from "./style";
import CircularProgress from '@material-ui/core/CircularProgress';

const HOME_CATEGORY_PRODUCT = gql`
  query HomeCategory($ids: String!) {
    products(pageSize: 4, filter: { category_id: { eq: $ids } }) {
      total_count
      items {
        id
        name
        sku
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
const CategoryHome = (props) => {
    const dataCart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const styles = useStyles();

    const { loading, error, data } = useQuery(HOME_CATEGORY_PRODUCT, {
        variables: { ids: props.id },
    });

    if (loading) {
        return <div className="loading"><CircularProgress /></div>;
    }

    if (error) {
        return console.log(error);
    }

    const homecategory = data.products.items;

    const handleAdd = (productId, productName, productImage, productPrice) => {
        dispatch(
            addProduct({
                id: productId,
                name: productName,
                img: productImage,
                price: productPrice,
                qty: 1,
            })
        );
    };

    return (
        <div className="home-container">
            <div>
                <Typography>
                    <h2 className="title-cathome">{props.title}</h2>
                </Typography>
            </div>
            <Grid container spacing={3}>
                {homecategory.map((val, idx) => {
                    return (
                        <Grid container item xs={12} md={6} spacing={1} key={idx}>
                            <Paper>
                                <div className="image">
                                    <img src={val.image.url} className={styles.imgProduct} />
                                </div>
                                <div className="name">
                                    {" "}
                                    <Link href="/product/[id]" as={"/product/" + val.sku}>
                                        <a>
                                            <Typography>{val.name}</Typography>
                                        </a>
                                    </Link>
                                </div>
                                <div className="price">
                                    <Typography>
                                        <NumberFormat
                                            value={val.price.regularPrice.amount.value}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$ "}
                                        />
                                    </Typography>
                                </div>
                                <button
                                    className="button"
                                    onClick={() =>
                                        handleAdd(
                                            val.sku,
                                            val.name,
                                            val.image.url,
                                            val.price.regularPrice.amount.value
                                        )
                                    }
                                >
                                    <Typography>Add to Cart</Typography>
                                </button>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default withApollo({ ssr: true })(CategoryHome);
