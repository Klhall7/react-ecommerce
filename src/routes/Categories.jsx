import { useLoaderData, Link } from "react-router-dom";

export async function loader () {
    const url = `https://fakestoreapi.com/products/categories`
    const data = await fetch(url).then(response => response.json())
    return { data }
}

const Categories = () => {
  const { data } = useLoaderData()

  //  ul map takes data from loaded data and assigns each category to route path of singleCat
  return (
    <>
    <Link to="/cart">
      <img src="" alt='cart icon'/>
    </Link>
      <ul> 
            {data.map ((category, index) => {
                return (
                    <li key={index}>
                      <Link id="catLink" to={`/products/category/${category}`}>{category}</Link>
                    </li>
                );
            })}
            </ul>
    </>
  );
};

export default Categories;
