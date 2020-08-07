import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchForm from './SearchForm.jsx';
import Results from './Results.jsx';
import ReactPaginate from 'react-paginate';

const App = (props) => {

    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [offset, setOffset] = useState(0);

    const search = (keyword) => {
        
        axios.get(`/events?_page=${currentPage}&q=${keyword}`)
        .then( ({ data, headers }) => {
            let totalPages = JSON.parse(headers['x-total-count']);
            setPageCount(totalPages);
            setData(data);
        })
        .catch( (error) => {
            //TODO: handle error?
            console.log(error);
        })
    };

    const handlePageClick = (data) => {
        
    
        setOffset(offset)
        // , () => {
        //   this.loadCommentsFromServer();
        // });
      };

    
    return (
            <div>
                
            <h1>Historical data Finder</h1>
        
            <SearchForm search={search}/>
            {data && data.length > 0 ?
                <Results data={data}/> : null}
            {pageCount > 1 ?
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}/>
                : null }
            </div>
        )
 
}

ReactDOM.render(<App/>, document.getElementById('app'));
