import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = ({ cartLength }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark " style={{ background: "linear-gradient(315deg, #6617cb 0%, #882463 74%)" }}>
            <div className="container size-sm">
                <NavLink className="navbar-brand" to="/">AbhiHarsh</NavLink>
                <div>
                    <ul className="navbar-nav ml-auto" style={{ color: "white" }}>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/cart"}><i className="fa fa-shopping-cart mr-2"
                                aria-hidden="true" />Cart {cartLength ? `(${cartLength})` : ''}</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


const mapStateToProps = (state) => {
    return {
        cartLength: state.shop.cart.length
    }
};

export default connect(mapStateToProps, null)(Header);
