import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const DeleteContact = ({match, history}) => {
    const { deleteContact, contacts} = useContext(GlobalContext);
    const contactId = match.params.id;
    
    const [location, setLocation] = useState ('');
    const [contact, setContact] = useState('');
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [registered, setRegistered] = useState('');

    useEffect (() => {
        const selectedContact = contacts.find(cont => cont.id === +contactId);
        setContact(selectedContact);
        setFname(contact.fname);
        setEmail(contact.email);
        setLocation(contact.location);
        setPhone(contact.phone);
        setRegistered(contact.registered);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contactId, contacts, contact ])


    const onSubmit = (e) => {
        e.preventDefault();

        deleteContact(contactId);

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
                                    <Form.Control value={ fname} type='text' placeholder='Last Name, First Name Middle Initial'  />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control value={email } type='email' placeholder='example@email.com' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control value={ phone} type='text' placeholder='99999999999'  />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control value={location} type='text' placeholder='Location'  />
                                </Form.Group>    
                                <Form.Group>
                                    <Form.Label>Registered</Form.Label>
                                    <Form.Control value={ registered} type='text' placeholder='mm/dd/yyyy' onChange={(e)=> setRegistered(e.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <div className="d-flex justify-content-between mt-5">
                                        <Link to='/'>
                                            <Button className='bg-success'>Cancel Delete</Button>
                                        </Link>
                                        <Button type='submit' className='bg-danger'>Delete Contact</Button>
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
