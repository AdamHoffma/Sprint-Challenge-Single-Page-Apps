import React from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'

export default function CharacterCard (props) {
  return (
    <Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>{props.species}<br/> {props.status}</Card.Meta>
      <Card.Description>
        Location: {props.location} <br/> Origin: {props.origin}
      </Card.Description>
    </Card.Content>    
  </Card>
  )}
