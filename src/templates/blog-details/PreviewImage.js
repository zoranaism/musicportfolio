import React from 'react';

const BlogDetailsPreviewImage = ({thumb, title}) => {
    return (
        <div className="blog-image">
            <img src={require('../../assets/images/' + thumb)} alt={title ? title : "Blog"}/>
        </div>
    );
};

export default BlogDetailsPreviewImage;