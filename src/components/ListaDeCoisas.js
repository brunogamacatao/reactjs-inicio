import React from 'react';
import PropTypes from 'prop-types';

export default class ListaDeCoisas extends React.Component {
  renderCoisa(coisa, index) {
    return (
      <li key={'coisa_' + index}>{coisa}</li>
    );
  }

  render() {
    return (
      <div>
        <h3>Coisas</h3>
        <ul>{this.props.coisas.map(this.renderCoisa)}</ul>
      </div>
    );
  }
}

ListaDeCoisas.propTypes = {
  coisas: PropTypes.array.isRequired
};