import { useLoaderData, Link } from "react-router-dom"

export async function loader ({ params }) {
    const { id } = params;
    const url = `https://fakestoreapi.com/products/${id}`
    const data = await fetch(url).then(response => response.json())
    return { data }
}

const ProductDetails = () => {
    const { data } = useLoaderData()
    console.log('PRODUCT SELECTION:', data);

    return (
        <>
        <Link id='cartIcon'to="/cart">
        <img src="" alt='cart icon'/>
            {/* need to save an icon and select for src */}
        </Link>
        
        <div id='card' >
            {/* need to add styles to #card */}
                <ul>
                    <h3>{data.title}</h3>
                    <img src={data.image} alt={data.title} />
                    <li>Price: ${data.price}</li>
                    <li>{data.description}</li>
                    <li>Rating: {data.rating.rate} ({data.rating.count} reviews)</li>
                </ul>

                <button type="submit">Add to Cart</button>
        {/* need to set add to cart button to add current product to cart (action post) */}
        </div>
            
        </>
    )
}

export default ProductDetails
                    