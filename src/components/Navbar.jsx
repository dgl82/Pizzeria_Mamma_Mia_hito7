import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const token = false;
  return (
    <div className="barra">
      <div className="barra">
        Pizzería Mamma Mía!
        <Link to="/">
          <button className="botonesBarra espaciado">🍕 Home</button>
        </Link>
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
