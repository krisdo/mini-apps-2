import React, {useState, useEffect, createRef} from 'react';
import axios from 'axios';
import SearchForm from './SearchForm.jsx';
import Results from './Results.jsx';
import ReactPaginate from 'react-paginate';
import { Header, Container, Sticky} from 'semantic-ui-react'

const App = (props) => {

    let contextRef = createRef();

    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [keyword, setKeyword] = useState('');

    const search = (keyword) => {
        setKeyword(keyword);
    };

    const handlePageClick = ({ selected }) => {
        console.log(selected);
        setCurrentPage(selected + 1);
    };

    const getData = (keyword) => {
        
        axios.get(`/events?_page=${currentPage}&q=${keyword}`)
        .then( ({ data, headers }) => {
            console.log(data);
            let totalPages = Math.ceil(JSON.parse(headers['x-total-count']) / 10);
            setPageCount(totalPages);
            setData(data);
        })
        .catch( (error) => {
            //TODO: handle error?
            console.log(error);
            alert('Please Search Again');
        })
    }

    useEffect( () => (keyword ? getData(keyword) : undefined), [keyword]);

    useEffect( () => (keyword ? getData(keyword) : undefined), [currentPage]);

    return (
        <div ref={contextRef}>
            <Sticky context={contextRef} attached='top'>
                <Header as='h2' textAlign='center' style={{backgroundColor: '#588ed1', padding: '20px'}}>Historical Data Finder</Header>
            </Sticky>
            <Sticky context={contextRef} offset={70} style={{textAlign: 'right', marginRight: '15px'}}>
                    <SearchForm search={search} style={{float: 'right'}}/>
            </Sticky>
                <Container textAlign='center'>
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
                </Container>
                <Container>
                    {data && data.length > 0 ?
                        <Results data={data}/> : null}
                </Container>
                <Container textAlign='center'>
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
                </Container>
            </div>
        )
 
}

export default App;
