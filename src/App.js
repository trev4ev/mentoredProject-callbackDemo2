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
    this.toggleDone = this.toggleDone.bind(this);
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
        items: this.state.items.concat({
          text: this.state.curr_item,
          done: false,
        }),
      });
    }
  }
  toggleDone(index) {
    let oldList = this.state.items;
    oldList[index].done = !oldList[index].done;
    this.setState({
      items: oldList,
    });
  }
  countWrong() {
    let count = 0;
    for (let i in this.state.items) {
      if (!this.state.items[i].done) {
        count++;
      }
    }
    return count;
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
            <Item
              index={index}
              toggleDone={this.toggleDone}
              key={index}
              done={item.done}
              text={item.text}
            />
          ))}
          <li style={{fontWeight: 600}}>{this.countWrong()} items left!</li>
        </ul>
      </div>
    );
  }
}

export default App;
