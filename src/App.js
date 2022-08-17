import './App.css';
import Header from './components/Header';
import Cart from './components/Cart'
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
      </Routes>
     
    </div>
  );
}

export default App;
