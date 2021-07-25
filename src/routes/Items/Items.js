/* External */
import React, { useState, useEffect } from 'react';

/* Components */
import Search from '../../components/Search';
import Breadcrumb from '../../components/Breadcrumb';
import Result from '../../components/Result';

/* Hooks */
import useIsMountedRef from '../../hooks/useIsMountedRef';

/* Services */
import { getItems } from '../../services/items';

/* Utils */
import { getQuery } from '../../utils/router';

const QUERY = 'search';

function Items() {
  const [products, setProducts] = useState([]);

  const isMountedRef = useIsMountedRef();
  const query = getQuery().get(QUERY);

  useEffect(async () => {
    const items = await getItems(query);
    if(isMountedRef.current) {
      setProducts(items);
    }
  }, [setProducts, query, isMountedRef]);

  return (
    <>
      <Search />
      <Breadcrumb categories={products?.categories} />
      <Result items={products?.items} />
    </>
  );
}

export default Items;