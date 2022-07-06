import React, {Fragment, useState} from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioGridFourColumn from "../../../templates/portfolio/grid/four-column";
import FooterTwo from "../../../components/footer/FooterTwo";
import portfolioData from '../../../data/portfolios'

const PortfolioGridFourColumnPage = () => {
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
            <PortfolioGridFourColumn portfolios={portfolios} loading={loading} fullWidth={false}/>
            <FooterTwo allItems={allItems} loadHandler={loadMore} />
        </Fragment>
    );
};

export default PortfolioGridFourColumnPage;