import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button, Image } from 'semantic-ui-react';
import EventAttendee from './EventAttendee';

export default class EventListItem extends Component {
    render() {
        const { event } = this.props;
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Image as='a' size='tiny' circular
                                src={event.hostPhotoURL} />
                            <Item.Content>
                                <Item.Header as="a">{event.title}</Item.Header>
                                <Item.Description>
                                    Hosted by: <a>{event.hostedBy}</a>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name="clock" /> {event.date} |
                        <Icon name="marker" /> {event.venue}
                    </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        {event.attendees.map((attendee) => (
                            <EventAttendee key={attendee.id} attendee={attendee} />
                        ))}

                    </List>
                </Segment>
                <Segment clearing>
                    <span>{event.description}</span>
                    <Button as="a" color="teal" floated="right" content="View" />
                </Segment>
            </Segment.Group>
        )
    }
}
