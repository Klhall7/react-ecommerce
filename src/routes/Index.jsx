import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome to the Store! <br /> Use the menu to browse and add items to
        your cart :)
      </h1>

      <h3 style={{ textAlign: "center " }}>
        {" "}
        Click the cart to open your active cart. <br /> You need to look at the
        details of a product to add it to your cart{" "}
      </h3>

      <Link to="/cart" style={{ marginLeft: "45%", height:"0.5rem", width:'auto'}}>
        <img src="" alt="cart icon" />
        {/* need to save an icon and select for src */}
      </Link>

      <h3
        style={{ textAlign: "center", color: "slateblue", marginTop: "10.5%" }}
      >
        If you get lost click the <span>Store Menu</span> to go back to this
        screen
      </h3>
    </>
  );
}
