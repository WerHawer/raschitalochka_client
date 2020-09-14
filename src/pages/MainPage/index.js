import React from 'react';
import Media from 'react-media';
import { Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { mapStyles, bounceTransition } from 'libs/routesAnimationsSettings';
import Header from '../../components/Header/HeaderContainer';
import OverviewPage from './OverviewPage/OverviewPageContainer';
import StatsPage from './StatsPage/StatsPage';
import CurrencyPage from './CurrencyPage/CurrencyPage';
import PrivatRoute from 'components/PrivatRoute/PrivatRoute';

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
                  <PrivatRoute path="/" exact component={OverviewPage} />
                  <PrivatRoute path="/stats" component={StatsPage} />
                  <PrivatRoute path="/currency" component={CurrencyPage} />
                  <Redirect to="/" />
                </AnimatedSwitch>
              </>
            )}
            {matches.else && (
              <>
                <AnimatedSwitch
                  atEnter={bounceTransition.atEnter}
                  atLeave={bounceTransition.atLeave}
                  atActive={bounceTransition.atActive}
                  mapStyles={mapStyles}
                  className="switch-wrapper"
                >
                  <PrivatRoute path="/" exact component={OverviewPage} />
                  <PrivatRoute path="/stats" component={StatsPage} />

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
