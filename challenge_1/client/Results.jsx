import React from 'react';
import moment from 'moment';
import { Card } from 'semantic-ui-react';

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
        <Card fluid color='blue' >
          <Card.Content>
            <Card.Header>
              {formatDate(date)}
            </Card.Header>
            <Card.Description>
              {description}
            </Card.Description>
          </Card.Content>
        </Card>
      )
    })}
    </div>
  )
}



export default Results;