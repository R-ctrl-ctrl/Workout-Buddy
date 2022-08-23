import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './styles/App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className='pages'>
          <Routes>
            
          <Route path='/' element={<div className='test'><Home/></div>}/>
          
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
