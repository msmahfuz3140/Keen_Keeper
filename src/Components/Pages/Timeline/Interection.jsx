import React, { useContext, useState } from "react";

import { AllContext } from "../../../GlobalContext/GlobalContext";
import AllInterectionTimeline from "./AllInterectionTimeline";
import { Link } from "react-router";
import { MdArrowBackIosNew } from "react-icons/md";

const Interection = () => {
             
    const {allInterection ,call , text ,videoCall,
            } =useContext(AllContext)

    const [sort , setSort]=useState('')
    console.log(sort);
    
    
            
            
    
    
   

  return (
    <div className="max-w-[1200px] mx-auto p-4 mt-10">
       <Link to={'/'} className="btn bg-[#244D3F] text-white mb-4"> <MdArrowBackIosNew />Back</Link>
        
        <h2 className="font-bold text-4xl mb-4">Timeline</h2>
      <div className="sort flex items-center justify-center">
        <div className="dropdown dropdown-center ">
          <div tabIndex={0} role="button" className="btn m-1 border-2 border-green-900">
            Filter timeline
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={()=>setSort('')}>All Interection</a>
            </li>
            <li>
              <a onClick={()=>setSort('Call')}>Sort by Call</a>
            </li>
            <li>
              <a onClick={()=>setSort('Text')}>Sort by Text</a>
            </li>
            <li>
              <a onClick={()=>setSort('Video')}>Sort by Video Call</a>
            </li>
          </ul>
        </div>
      </div>

        <div className="grid gap-3 mt-5">
            {
             sort =='' ?   allInterection.map((communication , index) => <AllInterectionTimeline key={index} communication ={communication}></AllInterectionTimeline>)

              : sort =='Call' ? call.map((communication , index) => <AllInterectionTimeline key={index} communication ={communication}></AllInterectionTimeline>)

               : sort =='Text' ?  text.map((communication , index) => <AllInterectionTimeline key={index} communication ={communication}></AllInterectionTimeline>)

                : sort =='Video' ? videoCall.map((communication , index) => <AllInterectionTimeline key={index} communication ={communication}></AllInterectionTimeline>)
                 : ''
            }
        </div>


    </div>
  );
};

export default Interection;
