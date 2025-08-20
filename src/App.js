import React, {Fragment} from 'react';
import Switcher from "./components/Switcher";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/*
* @ Component Imported
* */
import ErrorPage from "./pages/404Error";
import PortfolioDetailsPage from "./pages/portfolio/details";
import HomePersonalPortfolio from "./pages/home/HomePersonalPortfolio";
import PortfolioMasonryThreeColumnFullWidthPage from "./pages/portfolio/masonry/three-column-fullwidth";

const App = () => {
    return (
        <Fragment>
            <Switcher/>
            <Router>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio/:slug"}`}
                           component={PortfolioDetailsPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio"}`}
                           component={PortfolioMasonryThreeColumnFullWidthPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/home-personal-portfolio"}`}
                           component={HomePersonalPortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/"}`}
                           component={HomePersonalPortfolio} />
                    <Route exact component={ErrorPage}/>
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;