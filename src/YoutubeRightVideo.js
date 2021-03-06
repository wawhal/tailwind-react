import YoutubeHeader from './YoutubeHeader';
import YoutubeBottemHeader from './YoutubeBottemHeader';

function YoutubeRightVideo(_props) {
  return (
    <div className="Container flex flex-col  ">
        <div className=' flex my-2'>
           {_props.video}
        </div>
        <div className='content flex '>
           <div className='rounded-full'>
                 {_props.img}
            </div>
            <div className='  ml-2 w-72'>
            <div className='content-text text-lg font-medium  '>
                <h3> {_props.title}</h3>
            </div>
            <div className='content-text text-xs font-medium text-gray-text'>
               <p> {_props.channelName}</p>

            
              <p> {_props.views}</p>
            </div>
         </div>
         </div>
    </div>
  );
}

export default YoutubeRightVideo;