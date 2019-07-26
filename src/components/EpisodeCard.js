import React from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'

export default function EpisodeCard (name, episode, airdate, characters){
    return (
        <Card>
        <Card.Content>
          <Card.Header>{name.name}</Card.Header>
          <Card.Meta>
            {episode.episode}
          </Card.Meta>
          <Card.Description>
            {airdate.airdate}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    )
}