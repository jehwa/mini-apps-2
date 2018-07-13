import React from 'react';
import axios from 'axios';
import {Bar, Line, Pie} from 'react-chartjs-2';

const Chart = (props) => {
  return (
    <div className="chart">
      <Line  
        data={props.data}
        width={100}
        height={50}
      />
      <div align="right">
        Powered by CoinDesk
      </div>
    </div>
  )
}

export default Chart;