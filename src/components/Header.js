import Avatar from '../images/avatar.jpg';

function Header() {
    return (
        <header className="d-flex justify-content-between align-items-center">
            <h4>
                <label htmlFor="nav-toggle">
                    <span className="fas fa-bars"></span>
                </label>

                Dashboard
            </h4>

            <div className="search-wrapper">
                <span className="fas fa-search"></span>
                <input type="search" placeholder="Find People and Clubs" />
            </div>

            <div className="user-wrapper d-flex align-items-center">
                <img src={Avatar} className="img-fluid rounded-circle mr-2" width="40px" height="40px" alt="Clubhouse User Avatar" />
                <div>
                    <h6>Juliet Doe</h6>
                </div>
            </div>
        </header>
    )
}

export default Header
