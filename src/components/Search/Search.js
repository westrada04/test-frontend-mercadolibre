/* External */
import React, { memo, useState } from 'react';
import { useHistory } from 'react-router-dom';

/* Utils */
import { ROUTES } from '../../utils/router';

/* Assets */
import logo from '../../assets/logo__large_plus.png';
import { ReactComponent as Loupe } from '../../assets/loupe.svg';

/* Styles */
import './Search.scss';

function Search() {
  const [value, setValue] = useState('');

  const history = useHistory();

  const handleChangeValue = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSearch = async () => {
    history.push({
      pathname: ROUTES.Items,
      search: `?search=${value}`
    });
  };

  const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      handleSearch();
    }
  };

  const goToHome = () => {
    history.push(ROUTES.Home);
  };

  return (
    <div className="search">
      <div className="search__container-logo">
        <img className="search__logo" src={logo} onClick={goToHome} />
      </div>

      <div className="search__container-input">
        <input
          className="search__searcher"
          type="text"
          name="search"
          value={value}
          onChange={handleChangeValue}
          placeholder="Nunca dejes de buscar"
          onKeyDown={handleKeyDown}
        />
        <button className="search__button" onClick={handleSearch}>
          <Loupe className="search__icon-loupe" width={15} height={15} />
        </button>
      </div>
    </div>
  );
}

export default memo(Search);