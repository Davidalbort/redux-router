import '../App.css';

import { Checkout } from '../containers/Checkout';
import { Header } from '../containers/Header';
import { HashRouter, Routes, Route} from 'react-router-dom';
import { Home } from '../containers/Home';
import { NotFound } from '../containers/NotFound';

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/cart" element={ <Checkout />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
