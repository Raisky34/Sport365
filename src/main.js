import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import getRoutes from './routes';

const store = configureStore(window.INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes(store)}/>
  </Provider>,
  document.getElementById('content')
);

// render(
//   (<Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <Route path="/about" component={About} />
//       <Route path="/poweredby" component={PoweredBy} />
//       <Route path="/login" component={Login} onEnter={skipIfAuthenticated} onLeave={clearMessages}/>
//       <Route path="*" component={NotFound} onLeave={clearMessages}/>
//     </Route>
//
//   </Router>),
//   document.getElementById('content')
// );
