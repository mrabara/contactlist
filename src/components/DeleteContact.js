import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Button, Card } from 'react-bootstrap';
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


    const delContact = (id) => {
        deleteContact(id);
        history.push('/');
    }
    

    return (
        <div className='container'>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Card className='w-50 mt-5 shadow'>
                        <Card.Body>
                            <Card.Title>Delete Contact</Card.Title>
                            <p>{fname}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <p>{location}</p>
                            <p>{registered}</p>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex justify-content-between mt-5">
                                <Link to='/'>
                                    <Button className='bg-success'>Cancel Delete</Button>
                                </Link>
                                <Button className='bg-danger' onClick={() => delContact(contact.id) }>Delete Contact</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    )
}
