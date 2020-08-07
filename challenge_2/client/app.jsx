import React from 'react';
import axios from 'axios';
import Chart from './Chart.jsx';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      bpi: []
    }
  }

  componentDidMount() {
    axios.get('/data')
    .then(({data}) => {
      this.setState({
        dates: Object.keys(data),
        bpi: Object.values(data)
      });
    })
    .catch( (error) => {
      console.log(error);
    })
  }

  render(){
    return(
      <div>
        <h1>Cryptocurrency</h1>
        <section>
          {this.state.dates && this.state.bpi ? <Chart dates={this.state.dates} bpi={this.state.bpi}/> : null}
        </section>
      </div>

    )
  }
}

export default App;