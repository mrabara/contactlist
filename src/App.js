import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EditContact } from './components/EditContact';
import { Home } from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact/:id' component={EditContact}/>  
        </Switch>
      </Router>
      
    </>
  );
}


export default App;
