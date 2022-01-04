
import react from "react";
import './App.css';
import Genres from './Genres';

function YoutubeBottemHeader(_props) {
    return (
     <div className="Genres flex items-center  w-full bg-white sticky  top-16 ">
         <div className="Genres flex   mx-1.5">
            <Genres Genres="All"/>
         </div>  
         <div className="Genres flex   mx-1.5">
           <Genres Genres="Music"/>
         </div>
         <div className="Genres flex   mx-1.5">
           <Genres Genres="CSS"/>
         </div>
         <div className="Genres flex   mx-1.5">
           <Genres Genres="Comedies"/>
         </div>
         <div className="Genres flex   mx-1.5">
           <Genres Genres="Live"/>
         </div>
         <div className="Genres flex    mx-1.5">
           <Genres Genres="History"/>
         </div>
         <div className="Genres flex    mx-1.5">
          <Genres Genres="T-series"/>
         </div>
         <div className="Genres flex    mx-1.5">
          <Genres Genres="Cryptocurreny"/>
         </div>
         <div className="Genres flex    mx-1.5">
          <Genres Genres="Stock market"/>
         </div>
         <div className="Genres flex    mx-1.5">
          <Genres Genres="Bollywood Music"/>
         </div>
         <div className="Genres flex    mx-1.5">
          <Genres Genres="Mixes"/>
         </div>
         
         <div className="Genres flex    mx-1.5">
         <Genres Genres="Java script"/> 
         </div>
         <div className="Genres flex    mx-1.5">
         <Genres Genres="Gaming"/>
         </div>
         <div className="Genres flex    mx-1.5">
           <Genres Genres="Movies"/>
         </div>
         <div className="Genres flex    mx-1.5">
         <Genres Genres="Music"/>
         
         </div>
        

     </div>
    );
  }
  
  export default YoutubeBottemHeader;