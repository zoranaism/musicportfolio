import React, {Fragment, useState} from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioGridFourColumn from "../../../templates/portfolio/grid/four-column";
import FooterTwo from "../../../components/footer/FooterTwo";
import portfolioData from '../../../data/portfolios';

const PortfolioGridFourColumnFullWidthPage = () => {
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
            <PortfolioGridFourColumn portfolios={portfolios} loading={loading} fullWidth={true}/>
            <FooterTwo allItems={allItems} loadHandler={loadMore} />
        </Fragment>
    );
};

export default PortfolioGridFourColumnFullWidthPage;