import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  state = {
      monsters: [],
      searchTerm: ''
    }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters => {
      this.setState({monsters})
    })  
  }

  render(){
    const {monsters, searchTerm} = this.state;
    const filteredMonsters = monsters.filter(monster=>{
      return monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    return(
      <div className="App">
        <div className="App-header">
          <input type="input" placeholder="Search Here..." onChange={e => {
            this.setState({searchTerm : e.target.value})
          }}/>
          <CardList monsters={filteredMonsters} />
        </div>
      </div>
    )
  }
}
  
export default App;