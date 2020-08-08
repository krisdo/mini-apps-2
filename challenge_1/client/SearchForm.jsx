import React from 'react';

class SearchForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          keyword: null
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
      this.setState({
        keyword: event.target.value
      })
    }

    handleSearch(event){
      const { keyword } = this.state;
      this.props.search(keyword);
      event.preventDefault();
    }
    
    render() {
        return(
          <form onSubmit={this.handleSearch}>
                <input type="text" placeholder='search keyword' value={this.state.value}  onChange={this.handleChange} />  
              <input type="submit" value="Submit" />
          </form>
        )
    }
}

export default SearchForm;