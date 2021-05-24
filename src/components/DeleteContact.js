import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Button, Card, Form } from 'react-bootstrap';

export const DeleteContact = ({match}) => {
    const { deleteContact, contacts } = useContext(GlobalContext);
    const contactId = match.params.id;
    
    
    

    return (
        <div className='container'>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Card className='mt-5 shadow'>
                        <Card.Body>
                            <h1>Hello from Delete</h1>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}
