import './App.css';
import React from 'react';
import CATS_DATA from './data/cats.json';
import CatList from './components/CatList';


function App() {
    //console.log(CATS_DATA);
  return (
    <main><CatList list_o_cats={CATS_DATA.cats} /></main>
  );
}

export default App;
