import React, { useContext, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'

export const FormComponent = () => {
    const { locations, addContact } = useContext(GlobalContext);

    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [registered, setRegistered] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!fname && !email && !phone && !location && !registered) {
            alert('Please don\'t leave blank');
            return;
        }

        const newContact = {
            id: Math.floor(Math.random() * 100000 + 1),
            fname,
            email,
            phone,
            location: !location ? 'Manila' : 'Cebu',
            registered
        }


        addContact(newContact);
        setEmail('');
        setFname('');
        setLocation('Select Location');
        setPhone('');
        setRegistered('');

    }

    const cancelAdd = () =>{
         setEmail('');
        setFname('');
        setLocation('Select Location');
        setPhone('');
        setRegistered('');

    }


    return (
        <Card>
            <Card.Body>
                <Card.Title>Add Contact</Card.Title>
                <Form onSubmit={onSubmit}>
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
                            <Button className='bg-danger' onClick={() => cancelAdd()}>Cancel Add</Button>
                            <Button type='submit' className='bg-success'>Add Contact</Button>
                        </div>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}
