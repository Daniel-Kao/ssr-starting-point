import axios from 'axios';

const changeList = list => ({
  type: 'news_list',
  list,
});

export const getNewsList = () => (dispatch, getState) => {
  return axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
    dispatch(changeList(res.data));
  });
};
