import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import PhoneView from './components/PhoneView/PhoneView';
import usePhones from './hooks/usePhones';

export const PhonesContext = createContext();

function App() {
  const [phones, setPhones] = usePhones();
  return (
    <div>
      <Header></Header>
      <PhonesContext.Provider value={[phones, setPhones]}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/phone/:phoneSlug' element={<PhoneView />}></Route>
          <Route path='/order-review' element={<OrderReview />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </PhonesContext.Provider>
    </div>
  );
}

export default App;
