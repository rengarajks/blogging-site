import './App.css';
import Main from './Main';
import {BrowserRouter,Route,Routes} from   'react-router-dom'
import MainInterest from './MainInterest';
import MainMessage from './MainMessage';
import MainNotification from './MainNotification';
import MainProfile from './MainProfile';
import Login from './lv'

function App() {
  return (

    <BrowserRouter>


    <Routes>
      <Route exact path='/' Component={Main} />
      <Route path='/interest' Component={MainInterest} />
      <Route path='/message' Component={MainMessage} />
      <Route path='/notification' Component={MainNotification} />
      <Route path='/profile' Component={MainProfile} />
      <Route path='/login' Component={Login} />
    </Routes>
    
    </BrowserRouter>


    
  );
}

export default App;
