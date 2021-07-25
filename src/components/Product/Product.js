/* External */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

/* Styles */
import './Product.scss';

function Product({ title, amount, currency, picture, description, soldQuantity }) {
  return (
    <div className="product">
      <div className="product__container-description">
        <img className="product__image" src={picture} />
        <h2 className="product__description-title">Descripcion del producto</h2>
        <p className="product__description">{description}</p>
      </div>
      <div className="product__container-information">
        <h1 className="product__note">Nuevo - {soldQuantity} vendidos</h1>
        <h1 className="product__title">{title}</h1>
        <h3 className="product__price">
          {currency} - ${amount}
        </h3>
        <button className="product__button">
          <span className="product__button-text">Comprar</span>
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
  picture: PropTypes.string,
  description: PropTypes.string,
  soldQuantity: PropTypes.number
};

Product.defaultProps = {
  title: '',
  amount: 0,
  currency: '',
  picture: '',
  description: '',
  soldQuantity: 0
};

export default memo(Product);
