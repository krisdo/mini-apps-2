import React from 'react';
import { Button, Form } from 'semantic-ui-react'

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInput(event){
    const value = event.target.value 
    const name = event.target.name;
    this.setState({
      [name]: value
    });

  }

  handleSearch(event){
    
    event.preventDefault();
    this.props.search(this.state.start, this.state.end);
    this.setState({
      start: '',
      end: ''
    })
  }

  render() {
    return(

      <Form onSubmit={this.handleSearch} style={{padding: '40px 80px'}}>
        <Form.Field>
          <label>Start Date</label>
          <input
            placeholder='YYYY-MM-DD'
            name="start"
            type="text"
            value={this.state.start}
            onChange={this.handleInput} />
        </Form.Field>
        <Form.Field>
          <label>End Date</label>
          <input
            placeholder='YYYY-MM-DD'
            name="end"
            type="text"
            value={this.state.end}
            onChange={this.handleInput} />
        </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
    )
  }

}

export default SearchForm;