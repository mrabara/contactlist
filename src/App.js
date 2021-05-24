import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EditContact } from './components/EditContact';
import { Home } from './components/Home';
import { DeleteContact } from './components/DeleteContact';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact/:id' component={EditContact} />
          <Route exact path='/delete/:id' component={DeleteContact} />
        </Switch>
      </Router>
    </>
  );
}


export default App;
