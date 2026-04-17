import React, { useContext } from "react";
import { AllContext } from "../../../GlobalContext/GlobalContext";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsData = () => {
  const allstate = useContext(AllContext);
  const { call, text, videoCall } = allstate; 
  console.log(call.length);
  

  const data = [
  { name: 'Call', value: call.length, fill: '#244D3F' },
  { name: 'Text', value: text.length, fill: '#5431B5' },
  { name: 'Video Call', value: videoCall.length, fill: '#008000' }
  
];

  return (
    <div className="max-w-250 mx-auto p-4 ">
      <h2 className="font-bold text-2xl">Stats</h2>
      <div className="piechart  rounded-2xl py-10 shadow mt-5">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            margin : 'auto',
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend></Legend>
          <Tooltip></Tooltip>
        
        </PieChart>
      </div>
    </div>
  );
};

export default StatsData;
