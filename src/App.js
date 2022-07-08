import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bookstore from './components/Bookstore';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Bookstore />} />
        <Route path="/books" element={<Bookstore />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
