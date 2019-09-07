import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actions } from './store';

const Home = props => {
  useEffect(() => {
    props.getNewsList();
  }, []);
  const getList = () => {
    const { newsList } = props;
    return newsList.map(item => <div key={item.id}>{item.title}</div>);
  };
  return (
    <div>
      <div>{getList()}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.home.name,
  newsList: state.home.newsList,
});

const mapDispatchToProps = dispatch => ({
  getNewsList() {
    dispatch(actions.getNewsList());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
