import React from "react";
import callIcon from '../../../assets/Images/call.png'
import textIcon from '../../../assets/Images/text.png'
import videoIcon from '../../../assets/Images/video.png'

const AllInterectionTimeline = ({communication}) => {
  return (
    <div className="px-5 py-4 rounded-2xl shadow flex gap-3 items-center">
        <div className="img">
          <img src={` ${communication.interaction =='call'  ? callIcon : communication.interaction =='text' ? textIcon : videoIcon }`} alt="icon " />
        </div>
        <div>
            <div className="flex gap-2 items-center">
               <h2 className="text-2xl font-bold text-[#244D3F]">{communication.interaction}</h2>
               <p className="text-gray-500"> with {communication. friendName}</p>
            </div>
            <div>
               <p className="text-gray-500">{communication.date}</p>
            </div>
        </div>
    </div>
  );
};

export default AllInterectionTimeline;
