import React from 'react';
import Media from 'react-media';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import OverviewPage from './OverviewPage/OverviewPage';
import StatsPage from './StatsPage/StatsPage';
import CurrencyPage from './CurrencyPage/CurrencyPage';
import NavLinkCustom from 'components/Nav-link/NavLinkCustom';

const HomePage = () => {
  return (
    <div>
      <Header />
      <NavLinkCustom to="/" children="text" />
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1023px)',
          large: '(min-width: 1024px)',
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <>
                <Switch>
                  <Route path="/" exact component={OverviewPage} />
                  <Route path="/stats" component={StatsPage} />
                  <Route path="/currency" component={CurrencyPage} />
                  <Redirect to="/" />
                </Switch>
              </>
            )}
            {matches.medium && (
              <>
                <Switch>
                  <Route path="/" exact component={OverviewPage} />
                  <Route path="/stats" component={StatsPage} />
                  <Redirect to="/" />
                </Switch>
              </>
            )}
            {matches.large && (
              <>
                <Switch>
                  <Route path="/" exact component={OverviewPage} />
                  <Route path="/stats" component={StatsPage} />
                  <Redirect to="/" />
                </Switch>
              </>
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default HomePage;
