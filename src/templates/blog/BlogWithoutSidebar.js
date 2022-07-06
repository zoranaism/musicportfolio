import React, {useState} from 'react';
import blogData from '../../data/blog';
import Blog from "../../components/blog";
import Loading from "../../components/loading";
import LoadMore from "../../components/loadmore";
import {Container, Row, Col} from 'react-bootstrap'
import PageContainer from "../../container/CustomPage";

const TemplateBlogWithoutSidebar = ({blogColumnClass}) => {
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
        <PageContainer classes={'bg-grey'}>
            <Container>
                <Row className="blog-content-wrap">
                    {posts.map(blog => (
                        <Col key={blog.id} className={blogColumnClass}>
                            <Blog
                                slug={blog.slug}
                                title={blog.title}
                                thumb={blog.thumb}
                                excerpt={blog.excerpt}
                                author={blog.meta.author}
                                postDate={blog.meta.postDate}
                                comments={blog.meta.comments}
                            />
                        </Col>
                    ))}
                </Row>

                <Row>
                    <LoadMore loadBlog={loadMore} totalPosts={totalPosts}/>
                </Row>
            </Container>

            {loading ? <Loading/> : null}
        </PageContainer>
    );
};

export default TemplateBlogWithoutSidebar;