import React, { useContext } from 'react';
import { AllContext } from '../../../GlobalContext/GlobalContext';
import EmpthyLine from './EmpthyLine';
import Interection from './Interection';

const Timeline = () => {
    const Allstate = useContext(AllContext)
       const {
                
                allInterection 
              
              } = Allstate

              console.log(allInterection);
              
    return (
        <div>
          <div className=''>
           {
              allInterection.length == 0 ? <EmpthyLine></EmpthyLine> : <Interection ></Interection>
            }
          </div>
          
        </div>
    );
};

export default Timeline;