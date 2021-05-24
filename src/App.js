import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EditContact } from './components/EditContact';
import { Home } from './components/Home';
import { DeleteContact } from './components/DeleteContact';
import { ViewContact } from './components/ViewContact';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact/:id' component={EditContact} />
          <Route exact path='/delete/:id' component={DeleteContact} />
          <Route exact path='/view/:id' component={ViewContact} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}


export default App;
