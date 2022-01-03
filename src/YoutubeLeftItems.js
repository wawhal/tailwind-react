import { MdHomeFilled } from 'react-icons/md';




function YoutubeLeftItems(_props) {
  return (
    <div className="Container px-1 flex items-center
    justify-center max-h-screen flex-col mb-8  bg-white">
        <div className='icon m-auto font-thin  py-1'> 
           {_props.icon}</div>
            
         <p className='tital m-auto text-xs font-medium'>{_props.title}</p>
        
        
      
    </div>
  );
}

export default YoutubeLeftItems;