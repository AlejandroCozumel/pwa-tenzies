import { Link } from "react-router-dom";

// const Navbar = ({ user }) => {
const Navbar = () => {
  const logout = () => {
    window.open("https://backend-tenzies.herokuapp.com/auth/logout", "_self");
  };

  return (
    <nav className="navbar">
      <Link className="link" to="/">
        <img src="/images/alex-logo.png" alt="" className="logo" />
      </Link>
      {/* {user ? ( */}
        <ul className="list">
          <li className="listItem">
            <img src='' alt="" className="avatar" />
          </li>
          <li className="listItem">Hola</li>
          <li className="listItem" onClick={logout}>
            Log out
          </li>
        </ul>
      {/* ) : ( */}
        <Link className="link" to="/">
          Login
        </Link>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
