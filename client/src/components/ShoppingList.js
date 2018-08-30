import React, {Component} from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from  'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            {
                id: uuid(),
                name: 'Eggs'
            },
            {
                id: uuid(),
                name: 'Milk'
            },
            {
                id: uuid(),
                name: 'Cake'
            },
            {
                id: uuid(),
                name: 'Water'
            },
        ]
    }
    render() {
        const {items} = this.state;
        return (
            <Container>
                <Button
                    color="dark"
                    styel={{marginBottom: '2rem'}}
                    onClick={() => {
                        const name = prompt('Enter Item');
                        if(name){
                            this.setState(state => ({
                                items: [...state.items, {id: uuid(), name}]
                            }));
                        }
                    }}
                >Add Item</Button>
                <ListGroup>
                    {/* <TransitionGroup className="shopping-list"> */}
                        {items.map(({id, name}) => (
                            // <CSSTransition key={id} timeout={500} className="fade">
                            //     <ListGroupItem>
                            <div key={id}>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={()=>{
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }));
                                        }}
                                    >&times;</Button>
                                    {name}
                                    </div>
                            //   </ListGroupItem>
                            // </CSSTransition>
                        ))}
                    {/* </TransitionGroup> */}
                </ListGroup>
            </Container>
        );
    }
}

export default ShoppingList;