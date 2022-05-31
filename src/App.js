import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComp from './components/MainComp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComp />
      </BrowserRouter>
    </div>
  );
}

export default App;
