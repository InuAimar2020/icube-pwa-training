import { useQuery, gql } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import Link from "next/link";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CircularProgress from '@material-ui/core/CircularProgress';

const CATEGORY_LIST = gql`
  {
    categoryList(filters: {}) {
      id
      name
      url_key
      url_path
      display_mode
      children {
        id
        name
        url_key
        url_path
        display_mode
      }
    }
  }
`;

const Category = () => {
    const { loading, error, data } = useQuery(CATEGORY_LIST);

    if (loading) {
        return <div className="loading"><CircularProgress /></div>;
    }

    const category = data.categoryList;
    return (
        <div className="category-list">
            <Typography><h2 className="title">Category</h2></Typography>
            <ul>
                {category.map((val, idx) => {
                    return (
                        <Accordion key={idx}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Link href="/category/[id]" as={"/category/" + val.id}>
                                    <a className="name"><Typography>{val.name}</Typography></a>
                                </Link>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    {val.children.map((child, idy) => {
                                        return (
                                            <li key={idy} className="list">
                                                <Link href="/category/[id]" as={"/category/" + child.id}>
                                                    <a className="name"><Typography>{child.name}</Typography></a>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </ul>
        </div>
    );
};
export default withApollo({ ssr: true })(Category);
