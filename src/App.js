import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

import './App.scss';
import ScrollButton from './components/ScrollButton';

const App = () => {
  useEffect(() => {
    //-- TODO
  }, []);

  return (
    <BrowserRouter>
      <ScrollButton />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
