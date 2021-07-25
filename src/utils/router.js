/* External */
import { useLocation } from 'react-router-dom';

export const ROUTES = {
  Home: '/',
  Items: '/items',
  ItemsById: '/items/:id'
};

export function getQuery() {
  return new URLSearchParams(useLocation().search);
}