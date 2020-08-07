import React from 'react';
import moment from 'moment';


const Results = props => {

  const formatDate = (date) => {
    if(date[0] === '-') {
      return `${date.substring(1)} BC`
    } else {
      return moment(date).format('MMMM D, YYYY');
    }

  }

  return(
    <div>
    {props.data.map( ({ date, description }) => {
      return (
        <section>
          <h3>{formatDate(date)}</h3>
          <p>{description}</p>
        </section>
      )
    })}
    </div>
  )
}



export default Results;