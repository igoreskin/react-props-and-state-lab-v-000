import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }
// in my props I have: filters={this.state.filters} onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPets}
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">

          <select name="type" id="type" onChange={(event) => this.props.onChangeType(event.target.value)} value={this.props.filters.type}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
