import { useLoaderData, Link } from "react-router-dom";

export async function loader () {
    const url = `https://fakestoreapi.com/products/categories`
    const data = await fetch(url).then(response => response.json())
    return { data }
}

const Categories = () => {
  const { data } = useLoaderData()

  return (
    <>
      <ul>
            {data.map ((category, index) => {
                return (
                    <li key={index}>
                      <Link to={`/products/category/${category}`}>{category}</Link>
                    </li>
                );
            })}
            </ul>
    </>
  );
};

export default Categories;
