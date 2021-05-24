import React, { createContext, useReducer } from 'react'
import reducer from './AppReducer';

const initialState = {
    contacts: [
        {
            id: 1,
            fname: 'Rizal, Jose M.',
            email: 'jose.m.rizal@email.com',
            phone: '09001234567',
            location: 'Manila',
            registered: '05/15/2021'
        },
        {
            id: 2,
            fname: 'Rizal, Jose M.',
            email: 'jose.m.rizal@email.com',
            phone: '09003654712',
            location: 'Manila',
            registered: '05/15/2021'
        },
        {
            id: 3,
            fname: 'Rizal, Jose M.',
            email: 'jose.m.rizal@email.com',
            phone: '09007645321',
            location: 'Cebu',
            registered: '05/15/2021'
        }
    ],
    locations: [
        {
            id: 1,
            location: 'Manila'
        },
        {
            id: 2,
            location: 'Cebu'
        }
    ]
}

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addContact = (contact) => {
        dispatch({
            type: 'ADD_CONTACT',
            payload: contact
        })
    }

    const editContact = (contact) => {
        dispatch({
            type: 'EDIT_CONTACT',
            payload: contact
        })
    }

    const deleteContact = (id) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
    }

    return (<GlobalContext.Provider value={{ contacts: state.contacts, locations: state.locations, addContact, editContact, deleteContact }}>{ children }</GlobalContext.Provider>)
}