import "./header.styles.css"
import logo from '../../image/logo.svg'

function Header() {
    return (
        <div className="header">
            <div className="header-right">
                <span className="header-tagline">חדשנות</span>
                <img src={logo} alt="logo" className="header-logo" />
            </div>
            <h1>Do you want a pay raise ?</h1>
        </div>
    )
}

export default Header;
