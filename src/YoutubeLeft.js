import YoutubeHeader from './YoutubeHeader';
import YoutubeLeftItems from './YoutubeLeftItems';
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineExplore} from 'react-icons/md';
import { MdOutlineSubscriptions} from 'react-icons/md';
import { MdOutlineVideoLibrary} from 'react-icons/md';
import { MdHistory} from 'react-icons/md';

function YoutubeLeft() {
  return (
    <div>
        <YoutubeLeftItems
         icon={<AiFillHome/>}
         title="Home"/>

         <YoutubeLeftItems
         icon={<MdOutlineExplore/>}
         title="Explore"/>

         <YoutubeLeftItems
         icon={<MdOutlineSubscriptions/>}
         title="Subscriptions"/>

         <YoutubeLeftItems
         icon={<MdOutlineVideoLibrary/>}
         title="Library"/>

         <YoutubeLeftItems
         icon={<MdHistory/>}
         title="History"/>
    </div>
  );
}

export default YoutubeLeft;
