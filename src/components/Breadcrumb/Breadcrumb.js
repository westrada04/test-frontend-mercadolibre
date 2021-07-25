/* External */
import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';

/* Utils */
import { QUOTE } from '../../utils/constants';

/* Styles */
import './Breadcrumb.scss';

function Breadcrumb({ categories }) {
  const isLast = useCallback(
    index => {
      return index === categories.length - 1;
    },
    [categories]
  );

  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ol className="breadcrumb__list">
        {categories.map((category, index) => {
          return (
            <li className="breadcrumb__item" key={index}>
              <a href="#" className="breadcrumb__category">
                {category}
              </a>
              {!isLast(index) && <span className="breadcrumb__separator">{QUOTE}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string)
};

Breadcrumb.defaultProps = {
  categories: []
};

export default memo(Breadcrumb);