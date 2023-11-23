import logo from "../images/MathRecall-logo.png"

import "../CSS/Structure/headerFooter.css"
import "../CSS/Structure/text.css"
import "../CSS/View/theme.css"

function Header(){
    return (
        <header className="bg dark-theme">
            <img className="image" src={logo} alt="logo"></img>
            <h1 className="big header-footer-text name-view" onClick={() => {window.location.reload()}}>MathRecall</h1>
        </header>
    )
}

export default Header