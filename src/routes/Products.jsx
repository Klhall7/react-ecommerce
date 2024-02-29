import { useLoaderData, Link } from "react-router-dom"

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
            <Link id='cartIcon'to="/cart">
                <img src="" alt='cart icon'/>
                {/* need to save an icon and select for src */}
            </Link>
            <ul>
                {data.map(( product, index) => (
                <li key={index}>
                    <img src={product.image} alt={product.title} />
                    <div>
                    <h4>{product.title}</h4>
                    <p>Price: ${product.price}</p>
                    <Link to={`/products/${product.id}`}> {/* Link to specific product */}
                        <button type="button">More Details</button> {/* Button for each product */}
                    </Link>

                    </div>
                </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Products
