import React from 'react';
import { connect } from 'react-redux';
import { formatMoney } from "../../pipes/priceFormatter";
import { addProductToCart } from "../../actions";

const ProductDetail = (props) => {

    const {
        title,
        images,
        brand,
        price,
        wire,
        batterycell,
        size,
        weight,
        display,
        battery,
        rating,
        description,
        id
    } = props.product;


    const onCart = () => {
        props.dispatch(addProductToCart(props.product));
    };

    return (

        <aside className="col-sm-7">
            <article className="card-body p-5">
                <h3 className="title mb-3">{title}</h3>
                <div className="box">
                    <p className="price-detail-wrap">
                        <span className="price h3 text-warning">

                            <span className="currency">Rs. </span><span className="num">{formatMoney(price)}</span>
                        </span>
                    </p>
                    <dl className="item-property">
                        <dt>Description</dt>
                        <dd><p className="text-capitalize">{description}</p></dd>
                    </dl>
                    <dl className="param param-feature">
                        <dt>Brand</dt>
                        <dd className="text-capitalize">{brand}</dd>
                    </dl>
                    <dl className="param param-feature">
                        <dt>Size</dt>
                        <dd>{size}</dd>
                    </dl>
                    <dl className="param param-feature">
                        <dt>Battery Cell Composite</dt>
                        <dd>{batterycell}</dd>
                    </dl>
                    <dl className="param param-feature">
                        <dt>Wireless Type</dt>
                        <dd>{wire}</dd>
                    </dl>
                    <dl className="param param-feature">
                        <dt>Rating</dt>
                        <dd>{rating}</dd>
                    </dl>
                    <dl className="param param-feature">
                        <dt>Display</dt>
                        <dd>{display}</dd>
                    </dl>
                    <dl className="param param-feature">
                        <dt>Battery</dt>
                        <dd>{battery}</dd>
                    </dl>
                    <hr />
                    <hr />
                    <button
                        onClick={onCart}
                        className="btn btn-lg btn-outline-primary text-uppercase"><i
                            className="fa fa-shopping-cart" /> Add to cart
                </button>
                </div>
            </article>
        </aside>
    );
};

export default connect()(ProductDetail);
