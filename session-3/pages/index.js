import Head from "next/head";
import Link from "next/link";
import { withApollo } from "../lib/apollo";
import { Container } from "@material-ui/core";
import CategoryHome from "../components/CategoryHome";
import Category from "../pages/category";

const Home = (props) => {

  return (
    <Container>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <img
          src="/img/banner.jpg"
          alt="banner-top"
          className="banner-top"
        />
      </div>
      <div className="side-bar">
        <Category />
      </div>
      <div className="categoryhome-product">
        <CategoryHome id={49} title={"Featured Product"} />
        <CategoryHome id={45} title={"New Product"} />
      </div>
    </Container>
  );
};

export default withApollo({ ssr: true })(Home);
