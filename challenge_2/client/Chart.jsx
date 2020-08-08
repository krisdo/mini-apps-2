import React from 'react';
import { Line } from 'react-chartjs-2';
import { Table } from 'semantic-ui-react';

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
        borderColor: 'rgba(88,207,209,1)',
        borderWidth: 2
      }
    ]
  }

  return(
    <figure style={{border: '1px solid #6f807e'}}>
      <Line 
        data={dataParams}
        options={{
          title:{
            display:true,
            text: 'Bitcoin Price Index',
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