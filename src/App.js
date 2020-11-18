import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore } from 'redux';
import rootReducer from './reducers';
import './App.scss';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";
import ScrollTop from "./components/ScrollToTop/Scroll";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

export const  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
            <React.Fragment>
                <Header/>
                <Switch>
                    <Route exact path={'/'} render={() => {
                        return <Redirect to={'/products'}/>
                    }}/>
                    <Route exact path={'/products'} component={Home}/>
                    <Route exact path={'/products/:id'} component={ProductDetail}/>
                    <Route exact patr={'/cart'} component={ShoppingCart}/>
                </Switch>
                <Footer/>
                <ScrollTop showBelow={200} />
            </React.Fragment>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
