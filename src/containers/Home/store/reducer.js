const defaultState = {
  newsList: [],
  name: 'daniel',
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'news_list':
      return {
        ...state,
        newsList: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
