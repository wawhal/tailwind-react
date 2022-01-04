
import react from "react";
import './App.css';
import Genres from './Genres';

function YoutubeBottemHeader(_props) {
    return (
     <div className="Genres flex  w-full bg-white sticky  top-16 -2">
         <div className="Genres flex  my-2">
         <Genres Genres="All"/>
         <Genres Genres="Music"/>
         <Genres Genres="CSS"/>
         <Genres Genres="Comedies"/>
         <Genres Genres="Live"/>
         <Genres Genres="History"/>
         <Genres Genres="T-series"/>
         <Genres Genres="Cryptocurreny"/>
         <Genres Genres="Stock market"/>
         <Genres Genres="Bollywood Music"/>
         <Genres Genres="Mixes"/>
         <Genres Genres="Java script"/> 
         <Genres Genres="Gaming"/>
         <Genres Genres="Movies"/>
         <Genres Genres="Music"/>
         
         
         </div>

     </div>
    );
  }
  
  export default YoutubeBottemHeader;