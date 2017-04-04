import React, { Component } from 'react';
import { store } from '../Utils/Store';
import { HomePage } from './';
import cookie from 'react-cookie';

let input;
class HomePageContainer extends Component {
  constructor() {
    super();
    this.state = {
      submitSearch: this.submitSearch.bind(this)
    }
  }

  submitSearch(e) {
    const query = e.target.value;
    if (!query.trim()) {
      return;
    }
    fetch(`/api/napster/search?type=artist&q=${query}`, { credentials: 'include' })
    .then(resp => resp.json())
    .then(res => console.log(res));
  }

  render() {
    return(
      <HomePage {...this.state}/>
    );
  }
}

export { HomePageContainer };
