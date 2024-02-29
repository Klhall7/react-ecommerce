import { Outlet } from "react-router-dom";
import StoreMenu from "./StoreMenu";

const primaryNav = [
    { title: "Browse All Products", url: "/products" },
    { title: 'Browse By Categories', url: '/categories'},
]


const Layout = () => {
  return (
    <>
      <StoreMenu menuItems={primaryNav} />
      <div id="outlet">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
