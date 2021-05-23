import React from 'react'
import { GlobalProvider } from '../context/GlobalState'
import { ContactList } from './ContactList'
import { FormComponent } from './FormComponent'

export const Home = () => {
    return (
        <>
            <header>
                <h1 className='text-center text-primary'>Contacts List</h1>
            </header>
            <GlobalProvider>
                <div className="row">
                    <div className="col-3">
                    <FormComponent />
                    </div>
                    <div className="col-9">
                    <ContactList />
                    </div>
                </div>
            </GlobalProvider>     
        </>
    )
}
