import React from 'react';
import moment from 'moment';


const Results = props => {

  const formatDate = (date) => {
   if ( date.indexOf('-') !== -1 ) {
      if( date.indexOf('/') !== -1) {
        return `${moment(date.substring(1)).format('MMMM D, YY')} BC`;
      } else {
        return `${date.substring(1)} BC`
      }
    } else if(date.indexOf('/') !== -1) {
      return moment(date).format('MMMM D, YYYY');
    } else {
      return `${date} AD`;
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