import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default function LocationCard (props) {
  // image={image}
  return (
    
    <Card>    
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.type}</Card.Meta>
      <Card.Description>
        Dimension: {props.dimension}
      </Card.Description>
    </Card.Content>
    <Card.Content>
      <p>
        <Icon name="users"/>
        Residents:  {props.residents}
        
      </p>
    </Card.Content>
  </Card>
  )
}
