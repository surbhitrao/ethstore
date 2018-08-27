import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import DrizzleContainer from '../../components/DrizzleContainer'
import Home from '../Home'
import StoreList from '../StoreList'
import AdminStoreForm from '../AdminStoreForm'
import AdminStoreList from '../AdminStoreList'
import AdminProductList from '../AdminProductList'
import NotFound from '../NotFound'
import './index.less'

export default class App extends React.Component {
  render() {
    return (
      <DrizzleContainer>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={() => <Redirect to='/home' />} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/store_list' component={StoreList} />
            <Route exact path='/admin_store_form' component={AdminStoreForm} />
            <Route exact path='/admin_store_list' component={AdminStoreList} />
            <Route exact path='/admin_product_list' component={AdminProductList} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </DrizzleContainer>
    )
  }
}
