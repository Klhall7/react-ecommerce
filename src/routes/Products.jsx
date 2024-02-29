import { useLoaderData } from "react-router-dom"

export const loader = async () => {
    const url = 'https://fakestoreapi.com/products';
    const options = {
        method: "GET", 
        headers: {
            "Content-Type": "application/json",
        }, 
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log({data})
    return { data }
}

const Products = () => {
    const { data } = useLoaderData();
    console.log('PRODUCT DATA:', data);

    return (
        <>
        <div>
            <ul>
                {data.map((product, index) => (
                <li key={index}>
                    
                    <img src={product.image} alt={product.title} />
                    <div>
                    <h2>{product.title}</h2>
                    {/* <p>{product.description}</p> */}
                    <p>Price: ${product.price}</p>
                    {/* <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p> */}
                    </div>
                    
                </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Products
