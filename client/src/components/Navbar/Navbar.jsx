import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container"> {/* Bootstrap container added */}
        <div className="navbar-logo">MyApp</div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/chat">Chat</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
