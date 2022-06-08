const CHECK_STATUS = 'bookstore/src/redux/categories/CHECK_STATUS';

export default function categories(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export const checkStatus = () => ({ type: CHECK_STATUS });
