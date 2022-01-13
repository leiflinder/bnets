import './App.css';
// import ROSTER from './shared/nets_roster';
import { Navbar, NavbarBrand } from 'reactstrap';
import {Roster} from './components/Roster';
import logo from './bnets-logo.svg';
function App() {
return (
<div>
   <div className="App">
      <div className="container">
         <div className="navContainer">
            <div className="logo_container">
               <img src={logo} alt="logo" className="netslogo"/>
            </div>
            <div className="title_container">
               <h1>Roster</h1>
            </div>
            <br className="clearLeft"/>
         </div>
      </div>
      <Roster />
   </div>
</div>
);
}
export default App;