import react from "react";
import './App.css';

function Genres(_props) {
    return (
      <div className="Container border-2 w-max py-1 px-3 mx-1.5 rounded-full bg-neutral-200 hover:bg-black bg-white   hover:text-white">
         <p> {_props.Genres}</p>
  
      </div>
    );
  }
  
  export default Genres;