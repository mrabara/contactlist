import React, { useContext, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState'

export const EditContact = ({ match }) => {
    const { EditContact, locations, contacts} = useContext(GlobalContext);
    const contactId = match.params.id;
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [registered, setRegistered] = useState('');
    
    const contact = contacts.filter(contact => {
        return contact.id === contactId;
    })

    console.log(contact);


    return (
        <div className='container'>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Card className='w-50 mt-5'>
                        <Card.Body>
                            <Card.Title>Edit Contact</Card.Title>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control value={ fname} type='text' placeholder='Last Name, First Name Middle Initial' onChange={(e)=> setFname(e.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control value={email } type='email' placeholder='example@email.com' onChange={(e)=> setEmail(e.target.value)}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control value={ phone} type='text' placeholder='99999999999' onChange={(e)=> setPhone(e.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control value={location } as="select" onChange={(e)=> setLocation(e.target.value)}>
                                        <option defaultValue disabled>Select Location</option>
                                        {
                                            locations.map(location => <option key={location.id }>{ location.location}</option>)
                                        }
                                    </Form.Control>
                                    <Form.Group>
                                        <Form.Label>Registered</Form.Label>
                                        <Form.Control value={ registered} type='text' placeholder='mm/dd/yyyy' onChange={(e)=> setRegistered(e.target.value)} />
                                    </Form.Group>
                                </Form.Group>
                                <Form.Group>
                                    <div className="d-flex justify-content-between mt-5">
                                        <Button className='bg-danger'>Cancel Edit</Button>
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
