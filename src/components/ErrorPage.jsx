import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
        <div id='error-page'>
            <h1>404</h1>
            <p>Sorry, this route is not ready</p>

        <Link to="/"><p>GO BACK HOME?</p></Link>
        <p>You can also opt to use the back button to go to the last page you were on...</p>
        </div>
        </>
    )
}

export default ErrorPage;