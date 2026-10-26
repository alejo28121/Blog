import "../assets/styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar" aria-label="Navegación principal">
            <a className="navbar__brand" href="#inicio">
                <span className="navbar__brand-name">
                    Nuestra historia
                </span>

                <span className="navbar__brand-detail">
                    Montoya Gómez · Muñoz Toro
                </span>
            </a>

            <div className="navbar__links">
                <a href="#origenes">Los orígenes</a>
                <a href="#union">La unión</a>
                <a href="#generaciones">Las generaciones</a>
                <a href="#familiograma">Familiograma</a>
                <a href="#historia">Historia</a>
            </div>

            <a className="navbar__button" href="#historia">
                Explorar historia
                <span aria-hidden="true">↗</span>
            </a>
        </nav>
    );
};

export default Navbar;
