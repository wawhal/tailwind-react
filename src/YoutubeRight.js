
import YoutubeBottemHeader from './YoutubeBottemHeader';
import YoutubeRightVideo from './YoutubeRightVideo';

import { videos } from './videos';


function YoutubeRight() {
  return (
    <div className="Container  ">
       
        <div className='bg-white h-16 sticky  top-16 z-10 border-y'>
          <YoutubeBottemHeader/>
         </div>
       
       <div className="Container flex flex-wrap bg-zinc-100  w-fit ">
         {
           videos.map((props) => {
             return (
              <YoutubeRightVideo
                video={props.video}
                img={props.img}
                title={props.title}
                channelName={props.channelName}
                views={props.views}
            />
             )
           })
         }
       
    </div>
    </div>
  );
}

export default YoutubeRight;
