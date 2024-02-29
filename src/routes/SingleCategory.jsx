import { useLoaderData} from "react-router-dom"

export async function loader ({ params }) {
    const { categoryName } = params;
    const url = `https://fakestoreapi.com/products/category/${categoryName}`
    const data = await fetch(url).then(response => response.json())
    return { data }
}

const SingleCategory = () => {
    const { data } = useLoaderData()
    console.log('PRODUCT BY CATEGORY DATA:', data);

    return (
        <>
        <div>
            <ul>
                {data.map(( catProduct, index) => (
                <li key={index}>
                    
                    <img src={catProduct.image} alt={catProduct.title} />
                    <div>
                    {/* <Link to={`/products/${id}`}>{catProduct.title}</Link> */}
                    <h2>{catProduct.title}</h2>
                    {/* <p>{catProduct.description}</p> */}
                    <p>Price: ${catProduct.price}</p>
                    {/* <p>Rating: {catProduct.rating.rate} ({catProduct.rating.count} reviews)</p> */}
                    </div>
                    
                </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default SingleCategory

{/*component to browse individual categories from api */}
