import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function LocationCard (props,{ name, type, dimension, residents }) {
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
        Residents:  {props.residents}
        
      </p>
    </Card.Content>
  </Card>
  )
}
