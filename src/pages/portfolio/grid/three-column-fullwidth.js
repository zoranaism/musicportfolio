import React, {Fragment, useState} from 'react';
import SideHeader from "../../../components/SideHeader";
import Header from "../../../components/header/HeaderOne";
import FooterTwo from "../../../components/footer/FooterTwo";
import PortfolioGridThreeColumn from "../../../templates/portfolio/grid/three-column";

import portfolioData from '../../../data/portfolios'

const PortfolioGridThreeColumnFullWidthPage = () => {
    const [count, setCount] = useState(9);
    const [loading, setLoading] = useState(false);
    const portfolios = portfolioData.slice(0, count);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setCount(count + 3);
            setLoading(false);
        }, 200);
    };

    const allItems = count >= portfolioData.length;

    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <PortfolioGridThreeColumn portfolios={portfolios} loading={loading} fullWidth={true}/>
            <FooterTwo allItems={allItems} loadHandler={loadMore}/>
        </Fragment>
    );
};

export default PortfolioGridThreeColumnFullWidthPage;