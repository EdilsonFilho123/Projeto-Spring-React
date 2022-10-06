import logo from "../../assets/img/logo.png";
import './style.css'

function Header() {
    return (
        <header>  
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Logo DSMETA"/>
                <h1>DSMeta</h1>
                <p>Desenvolvido por <a href="https://github.com/edilsonfilho123">@edilsonfilho123</a></p>
            </div>  
        </header>
    )
}

export default Header