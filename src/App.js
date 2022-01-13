import './App.css';
// import ROSTER from './shared/nets_roster';
import { Navbar, NavbarBrand } from 'reactstrap';
import {Roster} from './components/Roster';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <div className="App">
        <Roster />
      </div>
    </div>
  );
}

export default App;