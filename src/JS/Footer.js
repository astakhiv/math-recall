import discordLogo from "../images/Discord-logo.png"
import instagramLogo from "../images/Instagram-logo.png"
import githubLogo from "../images/Github-logo.png"

import "../CSS/Structure/headerFooter.css"
import "../CSS/Structure/text.css"
import "../CSS/View/theme.css"

function Footer(){
    return (
        <footer className="bg footer dark-theme">
            <div>
                <p className="header-footer-text small">© 2023 Arsen Stakhiv</p>
                <p className="header-footer-text small">All Rights Reserved</p>
            </div>
            <div>
                <img className="image" src={discordLogo} alt="discord logo"></img>
                <img className="image" src={instagramLogo} alt="instagram logo"></img>
                <a href="https://astakhiv.github.io/happy-birthday/">
                    <img className="image" src={githubLogo} alt="github logo"></img>
                </a>
            </div>
        </footer>
    )
}

export default Footer