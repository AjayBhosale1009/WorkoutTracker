import { Link } from 'react-router-dom';
import trackitLogo from "./trackit.png";

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    {/* <h1>Workout Buddy</h1> */}
                    <img src={trackitLogo} alt="Trackit Logo" className='trackit-logo' />
                </Link>
            </div>
        </header>
    )
}

export default Navbar;