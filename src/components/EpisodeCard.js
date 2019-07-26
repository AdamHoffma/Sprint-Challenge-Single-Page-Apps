import React from 'react'
import {Card, Icon, Image, Link} from 'semantic-ui-react'

export default function EpisodeCard (props){
    return (
        <Card>
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>
            Episode: {props.episode}
          </Card.Meta>
          <Card.Description>
            Aired: {props.airdate}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='video' />
            Characters: {props.character}
          </a>
        </Card.Content>
      </Card>
    )
}