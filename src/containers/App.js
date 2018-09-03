import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => ({
  searchField: state.searchRobos.searchField,
  robots: state.requestRobots.robots,
  isPeding: state.requestRobots.isPeding,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPeding, error } = this.props;

    if (error) {
      return <h3>Ooooop! There was a problem!</h3>
    }

    if (isPeding) {
      return <h2>loading...</h2>
    }

    if(!robots) {
      return <h2>No robots</h2>
    }

    const filteredRobos = robots.filter(robo => {
      return robo.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1 className='f1'>robofriends</h1>
        <h2>Test change</h2>
        <SearchBox handleSearchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robos={filteredRobos} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);