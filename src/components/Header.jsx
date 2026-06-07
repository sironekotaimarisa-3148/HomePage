import { useCallback } from 'react';

function Header({ onPageChange }) {
  const handleNavClick = useCallback((pageName) => {
    onPageChange(pageName);
  }, [onPageChange]);

  return (
    <header>
      <h1 className="name">ShironekotaiMarisa</h1>
      <div className="header-container" />
      <button className="header-link" onClick={() => handleNavClick('main')}>
        メインページ
      </button>
      <button className="header-link" onClick={() => handleNavClick('calculator')}>
        電卓
      </button>
      <button className="header-link" onClick={() => handleNavClick('stamp')}>
        スタンプ
      </button>
      <div className="header-container" />
    </header>
  );
}

export default Header;
