import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Favorites from './pages/Favorites';
import Album from './pages/Album';
import Albums from './pages/Albums';
import Player from './components/Player';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/favorites' element={<Favorites/>}/>
              <Route path='/albums' element={<Albums/>}/>
              <Route path='/album/:id' element={<Album/>}/>
            </Routes>
          </BrowserRouter>
          <Player/>
      </Provider>
    )
}

export default App