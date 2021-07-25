/* External */
import axios from 'axios';

/* Utils */
import { URL_BACKEND, NUMBERS_OF_ELEMENTS_TO_SHOW } from '../utils/constants';

export async function getCategory(category_id) {
  try {
    const {
      data: { name }
    } = await axios.get(`${URL_BACKEND}/categories/${category_id}`);
    return name;
  } catch (error) {
    console.error('error :>> ', error);
  }
}

export async function getTopCategories(results) {
  const categories = await getCategories(results);
  const map = categories.reduce(function (prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  const sortable = Object.entries(map)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
  return Object.keys(sortable).slice(0, NUMBERS_OF_ELEMENTS_TO_SHOW);
}

export async function getCategories(results) {
  const promises = results.map(async ({ category_id }) => {
    return await getCategory(category_id);
  });
  return await Promise.all(promises);
}