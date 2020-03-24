import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import './index.css';
import Landingpage from './containers/Landingpage';
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel';
import { publicRoutes } from "./routes";

import * as serviceWorker from './serviceWorker';
const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
<MixpanelProvider mixpanel={mixpanel}>
{mixpanel => <Landingpage mixpanel={mixpanel}/>}
<Switch>
    {publicRoutes.map(route => (
        <Route key={route.path} {...route} />
    ))}
    {/* default route when path does not match anything */}
    <Route component={Landingpage} />
</Switch>

</MixpanelProvider>
      </Router>
      ,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
