import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComp from './components/MainComp';
import Store1 from './redux/Store1';

function App() {
  //console.log("app:", Store1.getState());
  return (
    <div className="App">
      <Provider store={Store1}>
        <BrowserRouter>
          <MainComp />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
