import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>1.</p>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Home