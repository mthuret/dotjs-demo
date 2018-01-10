import React, { Component } from 'react';
import './App.css';
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
  Highlight,
} from 'react-instantsearch/dom';
import ProgressiveImage from 'react-progressive-image';
class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="AP2QL7H7SN"
        apiKey="118d71ecb7177dd2bbe510705f1b42a5"
        indexName="dotjs-demo-backup"
      >
        <header>
          <SearchBox />
        </header>
        <main>
          <div className="sidebar">
            <p>Genres:</p>
            <RefinementList attributeName="genre" />
            <p>Years:</p>
            <RefinementList attributeName="year" />
          </div>
          <div className="results">
            <Hits hitComponent={Hit} />
          </div>
        </main>
      </InstantSearch>
    );
  }
}

const Hit = ({ hit }) => {
  return (
    <div className="movie">
      <ProgressiveImage src={hit.image} placeholder="placeholder.png">
        {src => <img src={src} />}
      </ProgressiveImage>
      <div className="title">
        <Highlight attributeName="title" hit={hit} />
      </div>
    </div>
  );
};

export default App;
