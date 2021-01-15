import React, { Component } from 'react';
import './App.css';

<style>
@import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
</style> 

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      newItem: "",
      list: []
    };
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem (id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }

  render() {
    return (
      <div>
        <h1 className="app-title">TO DO LIST</h1>
        <div className="container">
          <h2 className="h2">Add an Item...</h2>
          <br/>
          <input
           type="text"
           placeholder="Type Item Here!"
           value={this.state.newItem}
           onChange={e => this.updateInput("newItem", e.target.value)} />
          <button className="add-btn" onClick={() => this.addItem()}>✓</button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button className="remove-btn" onClick={() => this.deleteItem(item.id)}>✗</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}


export default App;