import logo from '../images/Logo.jpg';

function Navbar() {
    return(
        <nav className="title navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="logo" width="30" height="30" alt=""
                    className="rounded-circle align-top " />
                GFrancV
            </a>
            <div className="navbar-nav">
                <a className="nav-iteam nav nav-link" href="#">
                </a>
            </div>
        </nav>
    )
}

export default Navbar;