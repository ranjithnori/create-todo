import TodoTextInput from './TodoTextInput';

import React from 'react';
import Relay from 'react-relay';
import classnames from 'classnames';

class Todo extends React.Component {
  render() {
    return (
      <li>
        <div className="view">
          <label>
            {this.props.todo.text}
          </label>
        </div>
      </li>
    );
  }
}

export default Relay.createContainer(Todo, {
  fragments: {
    todo: () => Relay.QL`
      fragment on Todo {
        id,
        text
      }
    `,
    viewer: () => Relay.QL`
      fragment on User {
        id
      }
    `,
  },
});
