import React from 'react';
import axios from 'axios';
import Chart from './Chart.jsx';
import { Header } from 'semantic-ui-react';
import SearchForm from './SearchForm.jsx';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      bpi: []
    }
    this.search = this.search.bind(this);
  }

  search(start, end) {
    const options = {
      params: {
        startDate: start,
        endDate: end
      }
    }
    axios.get('/data', options)
    .then(({data}) => {
      this.setState({
        dates: Object.keys(data),
        bpi: Object.values(data)
      });
    })
    .catch( (error) => {
      this.setState({
        dates: [],
        bpi: []
      });
      setTimeout( () => 
        alert('Sorry, but your specified start date is invalid. Format is YYYY-MM-DD. Please check and try again.'), 300);
    })

  }


  render(){
    return(
      <div>
        <Header as='h2' textAlign='center' style={{shadowBox: '1px 2px 3px', padding: '20px'}} block>Cryptocurrency</Header>
        <SearchForm search={this.search}/>
        <section>
          {this.state.dates.length > 0 && this.state.bpi.length > 0 ? <Chart dates={this.state.dates} bpi={this.state.bpi}/> : null}
        </section>
      </div>

    )
  }
}

export default App;