import React from "react";
import posts from "../../data/blog";
import {Link} from "react-router-dom";
import socials from "../../data/social-networks";
import useGetParams from "../../hooks/useGetParams";

const Pagination = () => {
    const {slug} = useGetParams();
    const findCurrentPostIndex = posts.findIndex(post => post.slug === slug);
    const prevPost = findCurrentPostIndex !== 0 ? posts[findCurrentPostIndex - 1] : {};
    const nextPost = (findCurrentPostIndex + 1) !== posts.length ? posts[findCurrentPostIndex + 1] : {};

    return (
        <div className="blog-footer col-12 pl-0 pr-0 fix">
            <div className="row">
                <div
                    className="blog-social-share d-flex justify-content-center col-md-6 col-12 order-1 order-md-2 mb-xs-20"
                >
                    {socials.map(social => (
                        <a key={social.id} href={`https://${social.media}/${social.username}`}>
                            <i className={`fa fa-${social.media}`}/>
                        </a>
                    ))}
                </div>

                <div className="d-flex justify-content-start col-md-3 col-6 order-2 order-md-1"
                     style={{pointerEvents: prevPost.slug ? "visible" : "none", opacity: prevPost.slug ? "1" : "0.5"}}
                >
                    <Link to={`/blog/${prevPost.slug}`} className="post-nav old-post">
                        <i className="fa fa-long-arrow-left"/>Older
                    </Link>
                </div>

                <div className="d-flex justify-content-end col-md-3 col-6 order-3"
                     style={{pointerEvents: nextPost.slug ? "visible" : "none", opacity: nextPost.slug ? "1" : "0.5"}}
                >
                    <Link to={`/blog/${nextPost.slug}`} className="post-nav new-post">
                        <i className="fa fa-long-arrow-right"/>new
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Pagination;
