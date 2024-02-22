
import './App.css';
import Main from './Main';
import {BrowserRouter,Route,Routes} from   'react-router-dom'
import Timeline from './Pages/Screens/Timeline';
import InterestTimeline from './Pages/Screens/InterestTimeline';
import Home from './Pages/SideButtonsPages/Home';

function App() {
  return (

    <BrowserRouter>

<div className="App">
      
      <Main/>
      

    </div>

    <Routes>
      <Route exact path='/' Component={Home} />
      <Route path='interest' Component={InterestTimeline} />
    </Routes>
    
    </BrowserRouter>


    
  );
}

export default App;
