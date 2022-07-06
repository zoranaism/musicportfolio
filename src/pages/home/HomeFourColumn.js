import React, {useState} from 'react';

// File imported
import Header from '../../components/header/HeaderOne'
import SideHeader from "../../components/SideHeader";
import PortfolioFourColumn from "../../container/portfolio/PortfolioFourColumn";
import Footer from "../../components/footer/FooterTwo";
import  portfolioData from '../../data/portfolios';

const HomeFourColumn = () => {
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
        <div className={'main-wrapper'}>
            <Header/>
            <SideHeader mobile={true}/>
            <PortfolioFourColumn portfolios={portfolios} loading={loading}/>
            <Footer loadHandler={loadMore} allItems={allItems}/>
        </div>
    );
};

export default HomeFourColumn;
