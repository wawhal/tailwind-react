import logo from './logo.svg';
import './App.css';
import React from 'react';
import YoutubeHeader from './YoutubeHeader';
import YoutubeMainContent from './YoutubeMainContent';

function App() {
  return (
    <div className="Container">
       <YoutubeHeader/> 
       
       <YoutubeMainContent/>
      
    </div>
  );
}

export default App;
