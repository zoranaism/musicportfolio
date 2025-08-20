import React from 'react';
import Input from "../../components/input";

const LeaveAComment = () => {
    return (
        <div className="comment-form">
            <form action="/" method="post">
                <div className="row">
                    <div className="col-md-6 col-12 mb-30">
                        <Input type="text" name="name" id="name" placeholder="Name" required={true}/>
                    </div>
                    <div className="col-md-6 col-12 mb-30">
                        <Input type="email" name="email" id="email" placeholder="Email" required={true}/>
                    </div>
                    <div className="col-12 mb-30">
                        <Input type="textarea" name="comment" id="comment" placeholder="Comment" required={true} />
                    </div>
                    <div className="col-12">
                        <button type="submit">Post now</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LeaveAComment;