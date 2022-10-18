import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
