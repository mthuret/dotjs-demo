import React, { Component } from 'react';
import ProgressiveImage from 'react-progressive-image';
import './App.css';
import {
  InstantSearch,
  SearchBox,
  Configure,
  Hits,
  RefinementList,
  Highlight,
} from 'react-instantsearch/dom';

class App extends Component {
  render() {
    return (
      <div>
        <header>SEARCHBOX</header>
        <main>
          <div className="sidebar">
            <p>Genres:</p>
            GENRES
            <p>Years:</p>
            YEAR
          </div>
          <div className="results">RESULTs</div>
        </main>
      </div>
    );
  }
}

export default App;
