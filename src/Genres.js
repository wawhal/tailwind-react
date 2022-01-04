import react from "react";
import './App.css';

function Genres(_props) {
    return (
      <div className="Container border-gray text-yt-text-color border w-max py-1 text-sm px-3 font-medium rounded-full bg-neutral-200 hover:bg-black bg-yt-genres   hover:text-white">
         <p> {_props.Genres}</p>
  
      </div>
    );
  }
  
  export default Genres;