import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import PageContainer from "../../container/CustomPage";
import Blog from "../../components/blog";
import LoadMore from "../../components/loadmore";
import Loading from "../../components/loading";
import SidebarWrap from "../../container/sidebar";
import blogData from '../../data/blog';

const TemplateBlogWithSidebar = ({blogColumnClass, sidebarPosition, showPostsPerPage}) => {
    const [postsPerPage, setPostsPerPage] = useState(showPostsPerPage || 2);
    const [loading, setLoading] = useState(false);
    const posts = blogData.slice(0, postsPerPage);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setPostsPerPage(postsPerPage + 2);
            setLoading(false);
        }, 200);
    };

    const totalPosts = postsPerPage >= blogData.length;


    return (
        <PageContainer classes={'bg-grey'}>
            <Container>
                <Row>
                    <Col xl={9} lg={8} className={`mb-50 ${sidebarPosition === 'left' ? 'order-1 order-lg-2': ''}`}>
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
                    </Col>

                    <Col xl={3} lg={4} className={`${sidebarPosition === 'left' ? 'order-2 order-lg-1' : ''}`}>
                        <SidebarWrap/>
                    </Col>
                </Row>
            </Container>

            {loading ? <Loading/> : null}
        </PageContainer>
    );
};

export default TemplateBlogWithSidebar;