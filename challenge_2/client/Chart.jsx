import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({dates, bpi}) => {

  const dataParams = {
    labels: dates,
    datasets: [
      {
        label: 'USD',
        data: bpi,
        fill: false,
        // lineTension: 4,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2
      }
    ]
  }

  return(
    <figure>
      <Line 
        data={dataParams}
        options={{
          title:{
            display:true,
            text: 'Annual Bitcoin Price Index',
            fontSize: 20
          },
        legend: {
          display: true,
          position: 'right'
        }
        }}
      />
      <figcaption>Powered by CoinDesk</figcaption>
    </figure>
  )

}



export default Chart;