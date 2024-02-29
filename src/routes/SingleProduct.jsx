import { useLoaderData, Link } from "react-router-dom"

export async function loader ({ params }) {
    const { id } = params;
    const url = `https://fakestoreapi.com/products/${id}`
    const data = await fetch(url).then(response => response.json())
    return { data }
}

const SingleProduct = () => {
    const { data } = useLoaderData()
    console.log('PRODUCT SELECTION:', data);

    return (
        <>
        <div>
            <ul>
                {data.map((id, oneProduct, index) => (
                <li key={index}>
                    <img src={oneProduct.image} alt={oneProduct.title} />
                    <div>
                    <Link to={`/products/${id}`}>{oneProduct.title}</Link>
                    <h2>{oneProduct.title}</h2>
                    <p>{oneProduct.description}</p>
                    <p>Price: ${oneProduct.price}</p>
                    <p>Rating: {oneProduct.rating.rate} ({oneProduct.rating.count} reviews)</p>
                    </div>
                    
                </li>
                ))}
            </ul>
        </div>
            
        </>
    )
}

export default SingleProduct

// clickable products with data for individual product