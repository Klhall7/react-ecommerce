import PropTypes from "prop-types";
import { Link } from "react-router-dom";

{
  /* populate store navigation(browsing) */
}

const StoreMenu = ({ menuItems }) => {
  return (
    <>
      <nav id="sidebar">
        <h1>Store Menu</h1>
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
