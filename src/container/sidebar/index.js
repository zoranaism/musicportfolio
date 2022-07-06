import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import Sidebar from "../../components/sidebar";
import banner from '../../assets/images/banner/banner-1.jpg'

import posts from '../../data/blog';

const SidebarWrap = () => {

    return (
        <Fragment>
            <Sidebar>
                <div className="sidebar-search">
                    <form action="/" method="post">
                        <input type="text" placeholder="Search"/>
                        <button><i className="fa fa-search"/></button>
                    </form>
                </div>
            </Sidebar>

            <Sidebar title={"ABOUT ME"}>
                <div className="sidebar-about">
                    <p>There are many variations of passages of Lorem Ipsum available, alteration in some form, by
                        injected humour lebmid</p>
                </div>
            </Sidebar>

            <Sidebar title={"Categories"}>
                <ul className="sidebar-list">
                    <li><a href="/">Corporate</a></li>
                    <li><a href="/">Graphic Design</a></li>
                    <li><a href="/">Creative</a></li>
                    <li><a href="/">Photoshop</a></li>
                </ul>
            </Sidebar>

            <Sidebar title={"Newest post"}>
                <ul className="sidebar-post">
                    {posts.slice(0, 3).map(post => (
                        <li key={post.id}>
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            <span>{post.meta.postDate}</span>
                        </li>
                    ))}
                </ul>
            </Sidebar>

            <Sidebar title={"Tags"}>
                <div className="sidebar-tags">
                    <a href="/">Corporate</a>
                    <a href="/">Graphic Design</a>
                    <a href="/">Photoshop</a>
                </div>
            </Sidebar>

            <Sidebar>
                <div className="sidebar-banner">
                    <a href="/"><img src={banner} alt="banner"/></a>
                </div>
            </Sidebar>
        </Fragment>
    );
};

export default SidebarWrap;