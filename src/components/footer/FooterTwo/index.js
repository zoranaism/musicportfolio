import React from 'react';

const FooterTwo = ({loadHandler, allItems}) => {
    return (
        <div className="footer-section position-fixed section pt-30 pb-30">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="footer-copyright col-lg-4 col-12 order-lg-1 order-3">
                        <p>&copy; {new Date().getFullYear()} MINIMAU. ALL RIGHT RESERVED</p>
                    </div>

                    <div className="col-lg-4 col-12 d-flex justify-content-center order-lg-2 order-1 mb-sm-15 mb-xs-15">
                        <button
                            className={`load-more-btn ${allItems ? 'disabled' : null}`}
                            onClick={() => {
                                loadHandler()
                            }}
                        >
                            LOAD MORE...
                        </button>
                    </div>

                    <div className="footer-search col-lg-4 col-12 order-lg-3 order-2 mb-sm-15 mb-xs-15">
                        <form action="#">
                            <input type="text" placeholder="SEARCH NOW"/>
                            <button><i className="fa fa-search"/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTwo;
