import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
// import { robots } from './robots';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';


// const state = {
//   robots: robots,
//   searchfield: ''
// }


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
        .then(users => {this.setState({ robots: users})});
      }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredfriends = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    }) 
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {
      return ( 
        <div className='tc'>
          <h1 className = 'f1'>Bike Friends </h1>
          <Searchbox searchChange= {this.onSearchChange}/>
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

export default App;