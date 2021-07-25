/* External */
import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Components */
import Item from '../Item';

/* Utils */
import { ROUTES } from '../../utils/router';

/* Styles */
import './Result.scss';

function Result({ items }) {
  const history = useHistory();

  const handleClick = id => {
    history.push(`${ROUTES.Items}/${id}`);
  };

  return (
    <div className="results">
      {items.map(({ id, picture, price: { amount, currency }, free_shipping, title }, index) => {
        return (
          <Item
            key={index}
            picture={picture}
            amount={amount}
            currency={currency}
            free_shipping={free_shipping}
            title={title}
            ubication="Medellin"
            onClick={() => handleClick(id)}
          />
        );
      })}
    </div>
  );
}

Result.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.shape({
        currency: PropTypes.string,
        amount: PropTypes.number,
        decimals: PropTypes.number
      }),
      picture: PropTypes.string,
      condition: PropTypes.string,
      free_shipping: PropTypes.bool
    })
  )
};

Result.defaultProps = {
  items: []
};

export default memo(Result);