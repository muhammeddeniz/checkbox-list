import React from "react";

import "./header.scss";

interface IProps {
  store?: any;
}

const Header: React.FC<IProps> = ({ store }) => {
  return (
    <header>
      <div className="logo">
        <img src="/static/" alt="" />
        {/* görüntü dosyalarını public/static içine koyup buradan yol verirken direk staticten başlayabilirsin */}
      </div>

      <nav>
        <a href="">Ana Sayfa</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
