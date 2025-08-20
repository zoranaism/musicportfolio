import React from 'react';
import {Link} from 'react-router-dom'

const Blog = ({title, slug, thumb, excerpt, comments, postDate, author}) => {
    return (
        <div className="blog-item">
            <div className="blog-image">
                <Link to={`/blog/${process.env.PUBLIC_URL + slug}`}>
                    <img src={require('../../assets/images/' + thumb)} alt={title}/>
                </Link>
            </div>

            <div className="blog-content">
                <h4 className="blog-title">
                    <Link to={`/blog/${process.env.PUBLIC_URL + slug}`}>{title}</Link>
                </h4>

                <ul className="blog-meta">
                    <li>{postDate}</li>
                    <li><Link to={`/blog/${process.env.PUBLIC_URL + slug}`}>Comments ( {comments} )</Link></li>
                    <li>By <Link to={`/blog/${process.env.PUBLIC_URL + slug}`}>{author}</Link></li>
                </ul>

                <div className="blog-desc">
                    <p>{excerpt}</p>
                </div>

                <div className="read-more">
                    <Link to={`/blog/${process.env.PUBLIC_URL + slug}`}>READ MORE...</Link>
                </div>
            </div>

        </div>
    );
};

export default Blog;