import react from 'react';
import YoutubeRight from './YoutubeRight';
import YoutubeLeft from './YoutubeLeft';

function YoutubeMainContent() {
  return (
    <div className="Container flex">       
       <YoutubeLeft/>
       <YoutubeRight/>
    </div>
  );
}

export default YoutubeMainContent;
