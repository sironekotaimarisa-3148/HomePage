import { useCallback } from 'react';

function Header({ onPageChange }) {
  const handleNavClick = useCallback((pageName) => {
    onPageChange(pageName);
  }, [onPageChange]);

  return (
    <header>
      <h1 className="name">ShironekotaiMarisa</h1>
      <button className="header-link-main" onClick={() => handleNavClick('main')}>
        メインページ
      </button>
      <button className="header-link-cal" onClick={() => handleNavClick('calculator')}>
        電卓
      </button>
      <button className="header-link-stamp" onClick={() => handleNavClick('stamp')}>
        スタンプ
      </button>
    </header>
  );
}

export default Header;
