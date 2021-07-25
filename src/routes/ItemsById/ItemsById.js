/* External */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

/* Components */
import Search from '../../components/Search';
import Breadcrumb from '../../components/Breadcrumb';
import Product from '../../components/Product';

/* Hooks */
import useIsMountedRef from '../../hooks/useIsMountedRef';

/* Services */
import { getItemByUserId } from '../../services/items';

function ItemsById() {
  const [item, setItem] = useState({});
  const [categories, setCategories] = useState([]);

  const isMountedRef = useIsMountedRef();
  const { id } = useParams();

  useEffect(async () => {
    const { item, category } = await getItemByUserId(id);
    if(isMountedRef.current) {
      setItem(item);
      setCategories([category]);
    }
  }, [getItemByUserId, setItem, isMountedRef]);

  return (
    <>
      <Search />
      <Breadcrumb categories={categories} />
      <Product
        title={item?.title}
        amount={item?.price?.amount}
        currency={item?.price?.currency}
        picture={item?.picture}
        description={item?.description}
        soldQuantity={item?.soldQuantity}
      />
    </>
  );
}

export default ItemsById;