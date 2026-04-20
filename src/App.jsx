import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryPage from './components/CategoryPage';
import ArticleDetail from './pages/ArticleDetail';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<CategoryPage category="home" />} />
          <Route path="/sports"    element={<CategoryPage category="sports" />} />
          <Route path="/politics"  element={<CategoryPage category="politics" />} />
          <Route path="/movies"    element={<CategoryPage category="movies" />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          {/* Add new categories here easily — just copy one line above */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
