import iconGit from '../images/github.png'

function Footer() {
    return(
        <footer className="footer-style text-lg-start bg-dark">
            <div className="container">
            <div className="text-right p-3">
                <a href="https://github.com/GFrancV" target="_blank"><img src= { iconGit } alt="GitHub" width="30px"/></a>
                <p></p>
                <p>©GFrancV Page</p>
            </div>
            </div>
        </footer>
    )
}

export default Footer;