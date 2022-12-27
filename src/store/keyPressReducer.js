import { category as list } from '../assets/constants';
const keyPressReducer = (state, action) => {
  switch (action.type) {
    case 'arrowUp':
      return {
        selectIndex:
          state.selectIndex !== 0 ? state.selectIndex - 1 : list.length - 1,
      };
    case 'arrowDown':
      return {
        selectIndex:
          state.selectIndex !== list.length - 1 ? state.selectIndex + 1 : 0,
      };

    case 'select': {
      return {
        selectIndex: action.payload,
      };
    }
    default: {
      throw new Error();
    }
  }
};

export default keyPressReducer;
