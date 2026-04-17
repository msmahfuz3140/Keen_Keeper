import React, { useContext } from 'react';
import { AllContext } from '../../../GlobalContext/GlobalContext';
import EmpthyState from './EmpthyState';
import StatsData from './StatsData';




const Stats = () => {
      const allstate = useContext(AllContext)
      
           const {
                  allInterection 
                } =allstate
      
    return (
        <div>
           {
            allInterection.length ==0 ? <EmpthyState></EmpthyState> : <StatsData></StatsData>
           }
        </div>
    );
};

export default Stats;