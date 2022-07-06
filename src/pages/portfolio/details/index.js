import React, {Fragment} from 'react';
import portfolios from "../../../data/portfolios";
import SideHeader from "../../../components/SideHeader";
import useGetParams from "../../../hooks/useGetParams";
import Header from "../../../components/header/HeaderOne";
import FooterThree from "../../../components/footer/FooterThree";
import TemplatePortfolioDetails from "../../../templates/portfolio/details";

const PortfolioDetailsPage = () => {
    const {slug} = useGetParams();
    const portfolio = portfolios?.find(portfolio => portfolio.slug === slug);

    return (
        <Fragment>
            <Header classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <TemplatePortfolioDetails portfolio={portfolio}/>
            <FooterThree position='fixed'/>
        </Fragment>
    );
};

export default PortfolioDetailsPage;