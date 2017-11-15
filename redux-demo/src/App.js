import React from 'react';
import './App.css';
import CommentsListContainer from './containers/CommentsListContainer.js';



const App = () => {
  return (
    <div className="App">
      Tu będzie lista komentarzy!
      <CommentsListContainer />
    </div>
  );
};

export default App;
