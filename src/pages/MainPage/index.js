import React from 'react';
import Media from 'react-media';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import OverviewPage from './OverviewPage/OverviewPageContainer';
import StatsPage from './StatsPage/StatsPage';
import CurrencyPage from './CurrencyPage/CurrencyPage';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Media
        queries={{
          small: '(max-width: 767px)',
          else: '(min-width: 768px)',
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
            {matches.else && (
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
