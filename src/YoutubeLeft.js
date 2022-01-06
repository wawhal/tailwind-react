
import YoutubeLeftItems from './YoutubeLeftItems';


import { icons } from './icons';

function YoutubeLeft() {
  return (
    <div className=' bg-white w-24 text-yt-text-color sticky h-full left-0  top-16 z-10 '>


       {
        
         icons.map((props) =>{

          return(
           < YoutubeLeftItems
             icon={props.icon}
             title={props.title}/>
          )
        }
        )
         
       }

    </div>
  );
}

export default YoutubeLeft;
