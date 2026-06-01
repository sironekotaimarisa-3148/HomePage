import { useEffect, useState } from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header';
import MainPage from './components/MainPage';
import StampPage from './components/StampPage';
import './styles/style.css';

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  useEffect(() => {
    window.history.replaceState({ page: 'main' }, '', 'main');
  }, []);

  useEffect(() => {
    const handlePopState = (event) => {
      const page = (event.state && event.state.page) ? event.state.page : 'main';
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
    window.history.pushState({ page: pageName }, '', pageName);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return <MainPage />;
      case 'calculator':
        return <Calculator />;
      case 'stamp':
        return <StampPage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div>
      <Header onPageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default App;
