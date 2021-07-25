/* External */
import axios from 'axios';

/* Services */
import { getTopCategories, getCategory } from './category';

/* Utils */
import { URL_BACKEND, NAME, LAST_NAME, NUMBERS_OF_ELEMENTS_TO_SHOW } from '../utils/constants';

export async function getItems(query) {
  try {
    const {
      data: { results }
    } = await axios.get(`${URL_BACKEND}/sites/MLA/search?q=${query}`);
    return {
      author: {
        name: NAME,
        lastname: LAST_NAME
      },
      categories: await getTopCategories(results),
      items: getItemsByResults(results).slice(0, NUMBERS_OF_ELEMENTS_TO_SHOW)
    };
  } catch (error) {
    console.error('error :>> ', error);
  }
}

export async function getDescripcionByUserId(user_id) {
  try {
    const {
      data: { plain_text: description }
    } = await axios.get(`${URL_BACKEND}/items/${user_id}/description`);
    return description;
  } catch (error) {
    console.error('error :>> ', error);
  }
}

export async function getItemByUserId(user_id) {
  try {
    const {
      data: {
        id,
        title,
        currency_id: currency,
        price: amount,
        thumbnail: picture,
        condition,
        shipping: { free_shipping },
        sold_quantity,
        category_id
      }
    } = await axios.get(`${URL_BACKEND}/items/${user_id}`);

    return {
      author: {
        name: NAME,
        lastname: LAST_NAME
      },
      item: {
        id,
        title,
        price: {
          currency,
          amount,
          decimals: 0
        },
        picture,
        condition,
        free_shipping,
        sold_quantity,
        description: await getDescripcionByUserId(user_id)
      },
      category: await getCategory(category_id)
    };
  } catch (error) {
    console.error('error :>> ', error);
  }
}

function getItemsByResults(results) {
  return results.reduce((items, { id, title, currency_id: currency, price: amount, thumbnail: picture, condition, shipping: { free_shipping } }) => {
    return [...items, { id, title, price: { currency, amount, decimals: 0 }, picture, condition, free_shipping }];
  }, []);
}