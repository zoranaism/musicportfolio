import React, {Fragment, useState} from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioMasonryThreeColumn from "../../../templates/portfolio/masonry/three-column";
import FooterTwo from "../../../components/footer/FooterTwo";
import portfolioData from '../../../data/portfolios'

const PortfolioMasonryThreeColumnPage = () => {
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
            <PortfolioMasonryThreeColumn portfolios={portfolios} loading={loading}/>
            <FooterTwo allItems={allItems} loadHandler={loadMore} />
        </Fragment>
    );
};

export default PortfolioMasonryThreeColumnPage;