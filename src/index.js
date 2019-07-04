import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import {createBrowserHistory} from 'history'
import {Router, Route, Switch, Redirect } from 'react-router'
import indexRoutes from './routes'
import './fonts/stylesheet.css'
import 'antd/dist/antd.css'
import './index.scss'

const hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        // console.log('IndexRoutes >>>>>', indexRoutes)
        return(
          <Route exact path={prop.path} key={key} component={() => prop.component()} />
        )
      })}
      <Redirect to='/404' />
    </Switch>
  </Router>,
  document.getElementById('root')
)
