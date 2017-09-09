import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) { // called atutomatic whenever we create
                       // a instance of search_bar (tipo o init)
    super(props);

    this.state = {term: 'start'};
  }

  render(){
    return (
      <div>
        <input
         value={this.state.term}
         onChange={event => this.setState({term: event.target.value})}/>
      </div>
    )
  }


}

export default SearchBar;
