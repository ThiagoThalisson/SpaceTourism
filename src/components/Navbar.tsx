import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <header className="header">
            <div className="logo-wrapper">
                <img src="/assets/shared/logo.svg" alt="logo" className="logo"></img>
            </div>
            
            <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
                <span className="sr-only">Menu</span>
            </button>
         
    
            <nav className="nav">
                <ul id="primary-navigation" className="primary-navigation">
                    <li className="list-item">
                        <Link className="item-link" to="/"><span aria-hidden="true">00</span>Home</Link>
                    </li>
        
                    <li className="list-item">
                    <Link className="item-link" to="/destination"><span aria-hidden="true">00</span>Destination</Link>
                    </li>
        
                    <li className="list-item">
                        <a href="/space-tourism/crew" className="item-link"><span aria-hidden="true">02</span>Crew</a>
                    </li>
        
                    <li className="list-item">
                        <a href="/space-tourism/technology" className="item-link"><span aria-hidden="true">03</span>Technology</a>
                    </li>
                </ul>
            </nav>
        </header>
    
    )
}