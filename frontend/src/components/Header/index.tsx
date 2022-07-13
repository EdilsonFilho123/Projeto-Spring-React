import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="" />
                <h1>DS META</h1>
                <p>DESENVOLVIDO POR
                    <a href="https://www.instagram.com/edilson_filho_1/" target="on">EDILSON</a>
                    e
                    <a href="https://www.instagram.com/gubirosin/" target="on">GURPIS</a>
                </p>
            </div>
        </header>
    )
}

export default Header
