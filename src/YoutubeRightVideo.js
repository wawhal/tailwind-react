import YoutubeHeader from './YoutubeHeader';
import YoutubeBottemHeader from './YoutubeBottemHeader';

function YoutubeRightVideo(_props) {
  return (
    <div className="Container flex flex-col  h-80 mx-2 my-2">
        <div className=' flex my-2'>
           {_props.Video}
        </div>
        <div className='content flex '>
           <div className='rounded-full'>
                 {_props.img}
            </div>
            <div className='  ml-2 w-72'>
            <div className='content-text text-lg font-medium '>
                <h3> {_props.titel}</h3>
            </div>
            <div className='content-text text-sm font-medium text-gray-500'>
               <p> {_props.channalName}</p>

            
              <p> {_props.Views}</p>
            </div>
         </div>
         </div>
    </div>
  );
}

export default YoutubeRightVideo;