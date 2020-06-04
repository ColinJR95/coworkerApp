import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import { connect } from 'react-redux';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../action';


// const state = {
//   robots: robots,
//   searchfield: ''
// }

const mapStatetoProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error 
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {

    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
  }

class App extends Component {

    componentDidMount() {
      this.props.onRequestRobots()
      } 

  render() {
    // const { robots } = this.state;
    const {searchField, onSearchChange, robots, isPending} = this.props; 
    const filteredfriends = robots.filter(robots =>{
      return robots.name.toLowerCase().includes(searchField.toLowerCase())
    }) 
    if (isPending === 1) {
      return <h1>Loading</h1>
    } else {
      return ( 
        <div className='tc'>
          <h1 className = 'f1'>Co-workers </h1>
          <Searchbox searchChange= {onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <Cardlist robots={filteredfriends} />
            </ErrorBoundry>
          </Scroll>
        </div>
    );
  }
}

}

export default connect(mapStatetoProps, mapDispatchtoProps)(App); 