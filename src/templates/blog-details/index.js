import React from 'react';
import blogs from '../../data/blog';
import BlogDetailsContent from "./Content";
import {DiscussionEmbed} from 'disqus-react';
import SidebarWrap from "../../container/sidebar";
import {Container, Row, Col} from 'react-bootstrap';
import useGetParams from "../../hooks/useGetParams";
import BlogDetailsPreviewImage from "./PreviewImage";
import PageContainer from "../../container/CustomPage";

const TemplateBlogDetails = ({sidebar, sidebarPosition}) => {
    const {slug} = useGetParams()
    const post = blogs.find(blog => blog.slug === slug);

    // Disqus Comments add
    const disqusConfig = {
        identifier: post.slug,
        title: post.title,
        url: `https://hasthemes.com/${slug}`
    };

    return (
        <PageContainer classes={'bg-grey'}>
            <Container>
                <Row>
                    <Col xl={!sidebar ? 12 : 9} lg={!sidebar ? 12 : 8}
                         className={`mb-50 ${sidebarPosition === 'left' ? 'order-1 order-lg-2' : ''}`}
                    >
                        <div className='blog-item-details'>
                            <BlogDetailsPreviewImage thumb={post.thumb} title={post.title}/>

                            <Row>
                                <Col lg={!sidebar ? 9 : 12} className="m-auto">
                                    <BlogDetailsContent
                                        meta={post.meta}
                                        title={post.title}
                                        description={post.description}
                                    />
                                </Col>
                            </Row>
                        </div>

                        <div className="comment-wrap">
                            <h3>Comments</h3>

                            <DiscussionEmbed
                                shortname="mitech-1"
                                config={disqusConfig}
                            />
                        </div>
                    </Col>

                    {sidebar && (
                        <Col xl={3} lg={4} className={`${sidebarPosition === 'left' ? 'order-2 order-lg-1' : ''}`}>
                            <SidebarWrap/>
                        </Col>
                    )}
                </Row>
            </Container>
        </PageContainer>
    );
};

TemplateBlogDetails.defaultProps = {
    sidebar: true,
    sidebarPosition: "left"
}

export default TemplateBlogDetails;