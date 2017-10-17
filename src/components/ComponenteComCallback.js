import React from 'react';
import PropTypes from 'prop-types';

export default class ComponenteComCallback extends React.Component {
  adicionar(event) {
    event.preventDefault();
    this.props.adicionar(this.coisa.value);
    this.form.reset();
  }

  render() {
    return (
      <div>
        <h3>Adicionar Coisa</h3>
        <form ref={(input) => this.form = input} 
              onSubmit={(e) => this.adicionar(e)}>
          <div className="form-group">
            <label>Coisa:</label>
            <input className="form-control" type="text" ref={(input) => this.coisa = input} />
          </div>
          <button type="submit" className="btn btn-default">Adicionar</button>
        </form>
      </div>
    );
  }

}

ComponenteComCallback.propTypes = {
    adicionar: PropTypes.func.isRequired
};