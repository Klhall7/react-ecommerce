import { useLoaderData, Link } from "react-router-dom"

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
            <Link id='cartIcon'to="/cart">
                <img src="" alt='cart icon'/>
                {/* need to save an icon and select for src */}
            </Link>

            <ul id='card'>
            {/* need to add styles to #card */}
                {data.map(( catProduct, index) => (
                <li key={index}>
                    <img src={catProduct.image} alt={catProduct.title} />
                    <div>
                    <h2>{catProduct.title}</h2>
                    <p>Price: ${catProduct.price}</p>

                    <Link to={`/products/${catProduct.id}`}> {/* Link to specific product */}
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

export default SingleCategory

{/*component to browse individual categories from api */}
