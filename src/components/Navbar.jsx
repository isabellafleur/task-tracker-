import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/active">Active</Link>
      <Link to="/completed">Completed</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;