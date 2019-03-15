// @format
import React, {Component} from 'react';
import './App.css';
import Item from './Item';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curr_item: '',
      items: [],
    };
    this.handleItem = this.handleItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleItem(event) {
    this.setState({
      curr_item: event.target.value,
    });
  }
  addItem() {
    if (this.state.curr_item !== '') {
      this.setState({
        curr_item: '',
        items: this.state.items.concat(this.state.curr_item),
      });
    }
  }
  render() {
    return (
      <div className="todo-container">
        <div className="input-container">
          <input
            className="todo-input"
            placeholder="New Item"
            value={this.state.curr_item}
            onChange={this.handleItem}
          />
          <button className="todo-submit" onClick={this.addItem}>
            Submit
          </button>
        </div>
        <ul className="todo-item-list">
          {this.state.items.map((item, index) => (
            <Item key={index} text={item} />
          ))}
          <li style={{fontWeight: 600}}>FIX ME! 0 items left!</li>
        </ul>
      </div>
    );
  }
}

export default App;
