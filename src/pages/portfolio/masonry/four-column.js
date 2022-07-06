import React, {Fragment, useState} from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioMasonryFourColumn from "../../../templates/portfolio/masonry/four-column";
import FooterTwo from "../../../components/footer/FooterTwo";
import portfolioData from '../../../data/portfolios';

const PortfolioMasonryFourColumnPage = () => {

    const [count, setCount] = useState(12);
    const [loading, setLoading] = useState(false);
    const portfolios = portfolioData.slice(0, count);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setCount(count + 4);
            setLoading(false);
        }, 200);
    };

    const allItems = count >= portfolioData.length;

    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <PortfolioMasonryFourColumn portfolios={portfolios} loading={loading} fullWidth={false}/>
            <FooterTwo allItems={allItems} loadHandler={loadMore} />
        </Fragment>
    );
};

export default PortfolioMasonryFourColumnPage;