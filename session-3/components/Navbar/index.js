import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import Link from "next/link";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { withApollo } from "../../lib/apollo";

const Navbar = (props) => {
    const dataCart = useSelector((state) => state.cart);
    const totalItem = dataCart.cart.reduce(
        (item, product) => item + product.qty,
        0
    );

    return (
        <div className="header-container">
            <Container>
                <div className="logo">
                    <Link href="/">
                        <img src="/img/logo.svg" alt="logo" />
                    </Link>
                </div>
                <div className="cart-icon">
                    <Link href="/cart">
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={totalItem} color="secondary">
                                <a>
                                    <ShoppingCartOutlinedIcon style={{ color: "#08C" }} />
                                </a>
                            </Badge>
                        </IconButton>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default withApollo({ ssr: true })(Navbar);
