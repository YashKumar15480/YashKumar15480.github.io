import './App.css';
import Home from './Home';
// import Contact from './Contact';
import Navigate from './Navigate';
// import Heading from './Heading';
// import Yash from './Yash';
import { BrowserRouter as Switch, Router,  Route} from "react-router-dom";

import Placement from './Placement';

function App() {
  return (


      <Router>
       <div className ="App">
       <Navigate></Navigate>
       <Switch>
          <Route exact path = "/Home" component = {Home}></Route>
          <Route exact path = "/Placement" component = {Placement}></Route>
       </Switch>
       </div>
      </Router>
  
  );
}

export default App;