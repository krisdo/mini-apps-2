import React from 'react';
import { Line } from 'react-chartjs-2';
import { Table } from 'semantic-ui-react';

const Chart = ({dates, bpi}) => {

  const style = {
    borderWidth: '1',
    borderRadius: '2',
    borderColor: '#ddd',
    borderBottomWidth: '0',
    shadowColor: '#000',
    shadowOffset: '{ width: 0, height: 2 }',
    shadowOpacity: '0.8',
    shadowRadius: '2',
    elevation: '1',
    marginLeft: '5',
    marginRight: '5',
    marginTop: 10,
  }

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