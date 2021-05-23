import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';


export const Contacts = ({ contact }) => {
    const { viewContact } = useContext(GlobalContext);
    
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
                    <Button className='text-danger btn-light' size='sm'> <FontAwesomeIcon icon={faTrashAlt} /> </Button>
                </div>
            </td>
        </tr>
    )
}
