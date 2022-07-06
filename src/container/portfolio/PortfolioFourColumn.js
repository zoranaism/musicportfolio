import React, {Fragment} from 'react';
import Scrollbar from 'perfect-scrollbar-react';
import 'perfect-scrollbar-react/dist/style.min.css';
import Portfolio from "../../components/portfolio";
import Loading from "../../components/loading";

const PortfolioFourColumn = ({portfolios, loading}) => {

    const isMobile = window.innerWidth < 992;

    return (
        <Fragment>
            <div className="content-body section">
                <div style={{display: 'flex', maxHeight: isMobile ? 'auto' : 'calc(100vh - 200px)'}}>
                    <Scrollbar options={{suppressScrollX: true}} enable={!isMobile}>
                        <div className="section-wrap section">
                            <div className="row row-7 portfolio-column-four">
                                {portfolios.map(portfolio => (
                                    <div key={portfolio.id} className="col-xl-3 col-lg-4 col-md-6 col-12 mb-15">
                                        <Portfolio
                                            id={portfolio.id}
                                            variant={'column'}
                                            slug={portfolio.slug}
                                            title={portfolio.title}
                                            thumb={portfolio.thumb}
                                            category={portfolio.category}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Scrollbar>
                </div>
            </div>

            {loading ? <Loading/> : null}
        </Fragment>
    );
};

export default PortfolioFourColumn;
