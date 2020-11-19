import React, { Component } from 'react';
import BrandFilter from "../../components/BrandFilter/BrandFilter";
import OrderFilter from "../../components/OrderFilter/OrderFilter";
import './Filterbar.scss';

class FilterBar extends Component {
    render() {
        return (

            <div className="col-lg-3">
                <div id="gradient">
                    <form class="searchbox" action="#">
                        <input type="search" placeholder="Search" />
                        <button type="submit" value="search">&nbsp;</button>
                    </form>
                </div>
                <div className="row">
                    <div className="col-12">
                        <OrderFilter />
                    </div>
                    <div className="col-12">
                        <BrandFilter />
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterBar;
