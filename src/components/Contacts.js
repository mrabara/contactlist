import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import { DeleteContact } from './DeleteContact';


export const Contacts = ({ contact }) => {
    const { viewContact } = useContext(GlobalContext);
    const [cont, setCont] = useState(contact);

    const deleteContact = (contact) => {
        setCont(contact);
    }

    return (
        <tr>
            <td>{ contact.id}</td>
            <td>{contact.fname }</td>
            <td>{contact.email }</td>
            <td>{contact.phone }</td>
            <td>{ contact.location}</td>
            <td>{contact.registered}</td>
            <td>
                <div className="d-flex justify-content-between">
                    <Button className='text-info btn-light' size='sm' onClick={()=> viewContact(contact.id) }> <FontAwesomeIcon icon={ faEye} /> </Button>
                    <Link to={`/contact/${contact.id}`}>
                        <Button className='text-success btn-light' ><FontAwesomeIcon icon={faPencilAlt} /></Button>
                    </Link>
                    <Link to={`/delete/${contact.id}`}>
                        <Button className='text-danger btn-light' size='sm' onClick={() => deleteContact(contact) }> <FontAwesomeIcon icon={faTrashAlt} /> </Button>
                    </Link>
                </div>
            </td>
        </tr>
    )
}
