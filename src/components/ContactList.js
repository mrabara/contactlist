import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'
import { Contacts } from './Contacts';

export const ContactList = () => {
    const { contacts } = useContext(GlobalContext);
    return (
        <Table bordered>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Full Name</th>
                    <th>Email Address</th>
                    <th>Contact Number</th>
                    <th>Location</th>
                    <th>Registered Date</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map(contact => <Contacts key={ contact.id} contact={contact} />)
                }
            </tbody>
        </Table>
    )
}
