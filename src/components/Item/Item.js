/* External */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

/* Styles */
import './Item.scss';

function Item({ picture, amount, currency, free_shipping, title, ubication, onClick }) {
  return (
    <article className="item" onClick={onClick}>
      <div className="item__container-logo">
        <img className="item__logo" src={picture} />
      </div>
      <div className="item__container-body">
        <h2 className="item__price">
          {currency} - ${amount}
          {free_shipping && <span className="item__shipping"> * </span>}
        </h2>
        <h1 className="item__title">{title}</h1>
      </div>
      <div className="item__container-location">
        <h3 className="item__location">{ubication}</h3>
      </div>
    </article>
  );
}

Item.propTypes = {
  picture: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
  free_shipping: PropTypes.bool,
  title: PropTypes.string,
  ubication: PropTypes.string,
  onClick: PropTypes.func
};

Item.defaultProps = {
  picture: '',
  amount: 0,
  currency: '',
  free_shipping: false,
  title: '',
  ubication: '',
  onClick: undefined
};

export default memo(Item);
