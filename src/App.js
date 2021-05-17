import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormComponent } from './components/FormComponent';
import { ContactList } from './components/ContactList';
import { GlobalProvider } from './context/GlobalState';


function App() {
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
  );
}


export default App;
