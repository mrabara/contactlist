import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const Contacts = ({ contact}) => {
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
                    <Button className='text-info btn-light' size='sm' > <FontAwesomeIcon icon={ faEye} /> </Button>
                    <Button className='text-success btn-light'><FontAwesomeIcon icon={faPencilAlt} /></Button>
                    <Button className='text-danger btn-light' size='sm'> <FontAwesomeIcon icon={faTrashAlt} /> </Button>
                </div>
            </td>
        </tr>
    )
}
