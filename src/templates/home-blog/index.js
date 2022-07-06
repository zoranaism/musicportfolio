import React, {useState} from 'react';

// File imported
import HomeBlogPageHeader from "../../components/PageHeader/HomeBlog";
import Blog from "../../components/blog";
import LoadMore from "../../components/loadmore";
import Loading from "../../components/loading";

import blogData from '../../data/blog'

const ContentHomeBlogPage = () => {
    const [postsPerPage, setPostsPerPage] = useState(6);
    const [loading, setLoading] = useState(false);
    const posts = blogData.slice(0, postsPerPage);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setPostsPerPage(postsPerPage + 3);
            setLoading(false);
        }, 200);
    };

    const totalPosts = postsPerPage >= blogData.length;

    return (
        <div className="content-body section custom-scroll">
            <div className="section-wrap section">

                <HomeBlogPageHeader/>

                <div className="blog-wrap bg-grey section-padding pl-15 pl-xs-0 pr-15 pr-xs-0">
                    <div className="container">
                        <div className="row blog-content-wrap">
                            {posts.map(blog => (
                                <div key={blog.id} className="col-xl-4 col-md-6 col-12">
                                    <Blog
                                        slug={blog.slug}
                                        title={blog.title}
                                        thumb={blog.thumb}
                                        excerpt={blog.excerpt}
                                        author={blog.meta.author}
                                        postDate={blog.meta.postDate}
                                        comments={blog.meta.comments}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="row">
                            <LoadMore loadBlog={loadMore} totalPosts={totalPosts}/>
                        </div>
                    </div>
                </div>

                {loading ? <Loading/> : null}
            </div>
        </div>
    );
};

export default ContentHomeBlogPage;
