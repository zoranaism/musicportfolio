import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import Pagination from "../../components/pagination";

const BlogDetailsContent = ({title, meta, description}) => {
    return (
        <Fragment>
            <div className="blog-content">
                <h2 className="blog-title">{title}</h2>
                <ul className="blog-meta">
                    <li>
                        <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>
                            <i className="fa fa-user"/>{meta.author}
                        </Link>
                    </li>
                    <li>
                        <Link to={`${process.env.PUBLIC_URL + '/blog-details'}`}>
                            <i className="fa fa-comments"/>Comments ({meta.comments})
                        </Link>
                    </li>
                </ul>

                <div className="blog-desc">
                    <span dangerouslySetInnerHTML={{__html: description}}/>
                </div>
            </div>

            <Pagination/>
        </Fragment>
    );
};

export default BlogDetailsContent;