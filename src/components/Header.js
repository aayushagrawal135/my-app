import "../css/header.css";

function Header() {
    return (
        <header className="header">
            <Navbar />
        </header>
    );
}

function Navbar() {
    const navList = ["Home", "Software Experience", "Saved List", "Blog"]

    return (
      <nav className="navbar">
        <ul className="nav-list">
          {navList.map((navItem) => (
            <NavItem item={navItem} />
          ))}
        </ul>
      </nav>
    );
}

function NavItem({item}) {
    return (
      <li className="nav-item">
        <a href="#">{item}</a>
      </li>
    );
}

export default Header;
