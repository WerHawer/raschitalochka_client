import React from 'react';
import Media from 'react-media';
import { Route, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { mapStyles, bounceTransition } from 'libs/routesAnimationsSettings';
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
                <AnimatedSwitch
                  atEnter={bounceTransition.atEnter}
                  atLeave={bounceTransition.atLeave}
                  atActive={bounceTransition.atActive}
                  mapStyles={mapStyles}
                  className="switch-wrapper"
                >
                  <Route path="/" exact component={OverviewPage} />
                  <Route path="/stats" component={StatsPage} />
                  <Route path="/currency" component={CurrencyPage} />
                  <Redirect to="/" />
                </AnimatedSwitch>
              </>
            )}
<<<<<<< HEAD
            {matches.else && (
=======
            {matches.medium && (
              <>
                <AnimatedSwitch
                  atEnter={bounceTransition.atEnter}
                  atLeave={bounceTransition.atLeave}
                  atActive={bounceTransition.atActive}
                  mapStyles={mapStyles}
                  className="switch-wrapper"
                >
                  <Route path="/" exact component={OverviewPage} />
                  <Route path="/stats" component={StatsPage} />
                  <Redirect to="/" />
                </AnimatedSwitch>
              </>
            )}
            {matches.large && (
>>>>>>> ef5fe82c8489f096a1cec32cc93770c36e5803b0
              <>
                <AnimatedSwitch
                  atEnter={bounceTransition.atEnter}
                  atLeave={bounceTransition.atLeave}
                  atActive={bounceTransition.atActive}
                  mapStyles={mapStyles}
                  className="switch-wrapper"
                >
                  <Route path="/" exact component={OverviewPage} />
                  <Route path="/stats" component={StatsPage} />
                  <Redirect to="/" />
                </AnimatedSwitch>
              </>
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default HomePage;
