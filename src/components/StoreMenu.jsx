import PropTypes from "prop-types";
import { Link } from "react-router-dom";

{/* populates store navigation(browsing) */}

const StoreMenu = ({ menuItems }) => {

  return (
    <>
      <nav id="sidebar">
        <Link id="homeLink" to="/"><h1>Store Menu</h1></Link>
        <ul>
          {menuItems.map((link, index) => {
            return (
              <li key={`${link.title}-${index}`}>
                <Link id="routeLink" to={link.url}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

StoreMenu.propTypes = {
  menuItems: PropTypes.array,
};

export default StoreMenu;
