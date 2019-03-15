// @format
import React, {Component} from 'react';

class Item extends Component {
  render() {
    let index = this.props.index;
    return (
      <div>
        {this.props.done ? (
          <li
            style={{textDecoration: 'line-through'}}
            onClick={() => this.props.toggleDone(index)}>
            {' '}
            {this.props.text}{' '}
          </li>
        ) : (
          <li onClick={() => this.props.toggleDone(index)}>
            {' '}
            {this.props.text}{' '}
          </li>
        )}
      </div>
    );
  }
}

export default Item;
