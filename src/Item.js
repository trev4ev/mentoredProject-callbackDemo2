// @format
import React, {Component} from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    };
  }
  toggleDone() {
    this.setState({
      done: !this.state.done,
    });
  }
  render() {
    return (
      <div>
        {this.state.done ? (
          <li
            style={{textDecoration: 'line-through'}}
            onClick={() => this.toggleDone()}>
            {' '}
            {this.props.text}{' '}
          </li>
        ) : (
          <li onClick={() => this.toggleDone()}> {this.props.text} </li>
        )}
      </div>
    );
  }
}

export default Item;
