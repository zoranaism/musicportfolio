import React from 'react';

const LoadMore = ({loadBlog, totalPosts}) => {
    return (
        <div className="d-flex justify-content-center col-12 text-center mt-5 mt-xs-0">
            <button className={`load-blog-btn ${totalPosts ? 'disabled' : null}`}
                    onClick={() => { loadBlog() }} >
                LOAD MORE...
            </button>
        </div>
    );
};

export default LoadMore;
