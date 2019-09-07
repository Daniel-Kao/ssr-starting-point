const changeList = list => ({
  type: 'news_list',
  list,
});

export const getNewsList = () => (dispatch, getState, axiosInstance) => {
  return axiosInstance.get('/todos').then(res => {
    dispatch(changeList(res.data));
  });
};
