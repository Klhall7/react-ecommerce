import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout"; 
import Index from "./routes/Index";
import Products, { loader as allProductLoader } from "./routes/Products";
import Categories, { loader as categoryLoader } from "./routes/Categories";
import SingleCategory, { loader as productByCategoryLoader } from "./routes/SingleCategory";
import ProductDetails, { loader as productDetailLoader } from "./routes/ProductDetails";
import Cart from "./routes/Cart";




const router = createBrowserRouter([
  { path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "/products/",
        element: <Products />,
        loader: allProductLoader,
      },
      {
        path: "/categories",
        element: <Categories />,
        loader: categoryLoader,
      },
      {
        path: 'products/category/:categoryName',
        element: <SingleCategory />,
        loader: productByCategoryLoader,
      },
      {
        path: 'products/:id',
        element: <ProductDetails />,
        loader: productDetailLoader,
      },
      {
        path: '/cart',
        element: <Cart/>,
      }
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
