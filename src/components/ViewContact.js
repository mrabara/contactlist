import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const ViewContact = ({match}) => {
    const { contacts} = useContext (GlobalContext);
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
    return (
        <div className='container'>
            <div className="row">
                <div className="col text-center d-flex justify-content-center">
                    <Card className='w-50 mt-5 shadow'>
                        <Card.Body>
                            <Card.Title>View Contact</Card.Title>
                            <p>{fname}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <p>{location}</p>
                            <p>{registered}</p>
                            <Link to='/'>
                                <Button>Close</Button>
                            </Link>
                        </Card.Body>

                    </Card>
                </div>
            </div>
        </div>
    )
}
