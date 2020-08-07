import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchForm from './SearchForm.jsx'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: null
        }
        this.search.bind(this);
    }

    search(keyword) {
        
        axios.get(`/events?q=${keyword}`)
        .then( ({data}) => {
            console.log(data);
            this.setState({data});
        })
        .catch( (error) => {
            //TODO: handle error?
            console.log(error);
        })
    }

    componentDidMount(){

    }
    
    render() {
        return(
            <div>
                
                    <h1>Historical Events Finder</h1>
              
                    <SearchForm search={this.search}/>
                
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
