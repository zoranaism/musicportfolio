import React, {Fragment} from 'react';
import Switcher from "./components/Switcher";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/*
* @ Component Imported
* */
import TeamPage from "./pages/team";
import AboutPage from "./pages/about";
import ErrorPage from "./pages/404Error";
import ContactPage from "./pages/contact";
import ServicePage from "./pages/service";
import HomeBlog from "./pages/home/HomeBlog";
import HomeDefault from "./pages/home/HomeDefault";
import BlogDetailsPage from "./pages/blog/BlogDetails";
import HomeFiveColumn from './pages/home/HomeFiveColumn';
import HomeFourColumn from "./pages/home/HomeFourColumn";
import BlogThreeColumnPage from "./pages/blog/ThreeColumn";
import HomeThreeColumn from "./pages/home/HomeThreeColumn";
import PortfolioDetailsPage from "./pages/portfolio/details";
import HomePersonalPortfolio from "./pages/home/HomePersonalPortfolio";
import HomeFreelancerPortfolio from "./pages/home/HomeFreelancerPortfolio";
import PortfolioGridTwoColumnPage from "./pages/portfolio/grid/two-column";
import BlogTwoColumnLeftSidebarPage from "./pages/blog/TwoColumnLeftSidebar";
import PortfolioGridFourColumnPage from "./pages/portfolio/grid/four-column";
import PortfolioGridThreeColumnPage from "./pages/portfolio/grid/three-column";
import BlogTwoColumnRightSidebarPage from "./pages/blog/TwoColumnRightSidebar";
import PortfolioMasonryTwoColumnPage from "./pages/portfolio/masonry/two-column";
import PortfolioMasonryFourColumnPage from "./pages/portfolio/masonry/four-column";
import PortfolioMasonryThreeColumnPage from "./pages/portfolio/masonry/three-column";
import PortfolioGridFourColumnFullWidthPage from "./pages/portfolio/grid/four-column-fullwidth";
import PortfolioGridFiveColumnFullWidthPage from "./pages/portfolio/grid/five-column-fullwidth";
import PortfolioGridThreeColumnFullWidthPage from "./pages/portfolio/grid/three-column-fullwidth";
import PortfolioMasonryFourColumnFullWidthPage from "./pages/portfolio/masonry/four-column-fullwidth";
import PortfolioMasonryFiveColumnFullWidthPage from "./pages/portfolio/masonry/five-column-fullwidth";
import PortfolioMasonryThreeColumnFullWidthPage from "./pages/portfolio/masonry/three-column-fullwidth";

const App = () => {
    return (
        <Fragment>
            <Switcher/>
            <Router>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/contact"}`}
                           component={ContactPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/team"}`}
                           component={TeamPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/service"}`}
                           component={ServicePage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog/:slug"}`}
                           component={BlogDetailsPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-two-column-left-sidebar"}`}
                           component={BlogTwoColumnLeftSidebarPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-two-column-right-sidebar"}`}
                           component={BlogTwoColumnRightSidebarPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog"}`}
                           component={BlogThreeColumnPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio/:slug"}`}
                           component={PortfolioDetailsPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-masonry-five-column-fullwidth"}`}
                           component={PortfolioMasonryFiveColumnFullWidthPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-masonry-four-column-fullwidth"}`}
                           component={PortfolioMasonryFourColumnFullWidthPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-masonry-three-column-fullwidth"}`}
                           component={PortfolioMasonryThreeColumnFullWidthPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-masonry-four-column"}`}
                           component={PortfolioMasonryFourColumnPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-masonry-three-column"}`}
                           component={PortfolioMasonryThreeColumnPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-masonry-two-column"}`}
                           component={PortfolioMasonryTwoColumnPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-five-column-fullwidth"}`}
                           component={PortfolioGridFiveColumnFullWidthPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-four-column-fullwidth"}`}
                           component={PortfolioGridFourColumnFullWidthPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-three-column-fullwidth"}`}
                           component={PortfolioGridThreeColumnFullWidthPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-four-column"}`}
                           component={PortfolioGridFourColumnPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-three-column"}`}
                           component={PortfolioGridThreeColumnPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-two-column"}`}
                           component={PortfolioGridTwoColumnPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/about"}`}
                           component={AboutPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-freelancer-portfolio"}`}
                           component={HomeFreelancerPortfolio}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-personal-portfolio"}`}
                           component={HomePersonalPortfolio}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-blog"}`}
                           component={HomeBlog}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-five-column"}`}
                           component={HomeFiveColumn}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-four-column"}`}
                           component={HomeFourColumn}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-three-column"}`}
                           component={HomeThreeColumn}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-default"}`}
                           component={HomeDefault}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/"}`}
                           component={HomeDefault}
                    />
                    <Route exact component={ErrorPage}/>
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;