import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import {createBrowserHistory} from 'history'
import {Router, Route, Switch, Redirect } from 'react-router'
import indexRoutes from './routes'
import 'antd/dist/antd.css'
import './index.scss'

const hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        console.log(indexRoutes)
        return(
          <Route exact path={prop.path} key={key} component={() => prop.component()} />
        )
      })}
      <Redirect to='/404' />
    </Switch>
  </Router>,
  document.getElementById('root')
)





// import App from './App';
// import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
