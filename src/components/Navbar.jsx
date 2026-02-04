import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const setActiveClass = ({ isActive }) =>
    `botonesBarra espaciado ${isActive ? "activo" : ""}`;
  return (
    <div className="barra">
      <div className="barra">
        Pizzería Mamma Mía!
        <NavLink to="/" className={setActiveClass}>
          🍕 Home
        </NavLink>
        <Link to="/login">
          <button className="botonesBarra espaciado">
            {token ? "🔒 Logout" : "🔐 Login"}
          </button>
        </Link>
        {token ? (
          <Link to="/profile">
            <button className="botonesBarra espaciado">🔓 Profile</button>
          </Link>
        ) : (
          <Link to="/register">
            <button className="botonesBarra espaciado">🔐 Register</button>
          </Link>
        )}
        {/* <button className="botonesBarra espaciado">
          {token ? "🔓 Profile" : "🔐 Register"}
        </button> */}
      </div>
      <div>
        <Link to="/cart">
          <button className="botonTotal">
            🛒 Total:${total.toLocaleString("es-CL")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
