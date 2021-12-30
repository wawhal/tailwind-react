
import react from "react";
import './App.css';
import Genres from './Genres';

function YoutubeBottemHeader(_props) {
    return (
     <div className="Genres flex">
         <Genres Genres="All"/>
         <Genres Genres="Music"/>
     </div>
    );
  }
  
  export default YoutubeBottemHeader;