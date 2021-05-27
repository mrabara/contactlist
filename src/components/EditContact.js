import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState'

export const EditContact = ({ match, history}) => {
    const { editContact, locations, contacts } = useContext(GlobalContext);
    let contactId = match.params.id;
    const [contact, setContact] = useState({
        fname: '',
        email: '',
        phone: '',
        registered: '',
    });
   
 
    
    const  selectedContact = contacts.find(cont => cont.id === +contactId);
    
    const contactDetails = (contact) => {
        setContact();
    }

    console.log(selectedContact);


    const onSubmit = (e) => {
        e.preventDefault();
      
        editContact(contact);
       
        history.push('/');
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Card className='w-50 mt-5 shadow'>
                        <Card.Body>
                            <Card.Title>Edit Contact</Card.Title>
                            <Form onSubmit={onSubmit }>
                                <Form.Group>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control value={ selectedContact.fname} type='text' placeholder='Last Name, First Name Middle Initial' onChange={(e)=> contactDetails(e, 'fname')} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control value={selectedContact.email } type='email' placeholder='example@email.com' onChange={(e)=> contactDetails(e, 'email')}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control value={ selectedContact.phone} type='text' placeholder='99999999999' onChange={(e)=>contactDetails(e, 'phone')} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control value={selectedContact.location } as="select" onChange={(e)=> contactDetails(e, 'location' )}>
                                        <option defaultValue disabled>Select Location</option>
                                        {
                                            locations.map(location => <option key={location.id }>{ location.location}</option>)
                                        }
                                    </Form.Control>
                                    <Form.Group>
                                        <Form.Label>Registered</Form.Label>
                                        <Form.Control value={ selectedContact.registered} type='text' placeholder='mm/dd/yyyy' onChange={(e)=> contactDetails(e, 'registered')} />
                                    </Form.Group>
                                </Form.Group>
                                <Form.Group>
                                    <div className="d-flex justify-content-between mt-5">
                                        <Link to='/'>
                                            <Button className='bg-danger'>Cancel Edit</Button>
                                        </Link>
                                        <Button type='submit' className='bg-success'>Save Edit</Button>
                                    </div>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

