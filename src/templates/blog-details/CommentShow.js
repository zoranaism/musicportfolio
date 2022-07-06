import React from 'react';

const BlogDetailsCommentShow = ({comments}) => {
    return (
        <ul className="comment-list">
            {comments.map(comment => (
                <li key={comment.id}>
                    <div className="single-comment">
                        <div className="image">
                            <img
                                src={require('../../assets/images/blog/' + comment.commentAuthor.photo)}
                                alt={comment.commentAuthor.name}
                            />
                        </div>
                        <div className="content fix">
                            <h5>{comment.commentAuthor.name}</h5>
                            <span>{comment.date}</span>
                            <p>{comment.comment}</p>

                            <div className="reply">
                                <a href={`${process.env.PUBLIC_URL + '/blog-details'}`}><i className="fa fa-reply"/>reply</a>
                            </div>
                        </div>
                    </div>

                    {comment.replies ? (
                        <ul className="child-comment">
                            {comment.replies.map(reply => (
                                <li key={reply.id}>
                                    <div className="single-comment">
                                        <div className="image">
                                            <img
                                                src={require('../../assets/images/blog/' + reply.replyAuthor.photo)}
                                                alt={reply.replyAuthor.name}
                                            />
                                        </div>
                                        <div className="content fix">
                                            <h5>{reply.replyAuthor.name}</h5>
                                            <span>{reply.date}</span>
                                            <p>{reply.replyComment}</p>

                                            <div className="reply">
                                                <a href={`${process.env.PUBLIC_URL + '/blog-details'}`}>
                                                    <i className="fa fa-reply"/>reply
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </li>
            ))}
        </ul>
    );
};

export default BlogDetailsCommentShow;