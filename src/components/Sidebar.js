import logo from '../images/icon_wave.png';

function Sidebar() {
    return (
        <>
        <input type="checkbox" id="nav-toggle" />

        <div className="sidebar">
            <div className="sidebar-brand">
                <h4>
                    <img src={logo} alt="Clubhouse" style={{ width: "25px", height: "25px", marginTop: "-4px"}} />
                    <span>
                        Clubhouse
                    </span>
                </h4>
            </div>

            <div className="sidebar-menu">
                <ul>
                    <li>
                        <a href="#home" className="active">
                            <span className="fas fa-tachometer-alt"></span>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home">
                            <span className="fas fa-users"></span>
                            <span>Customer</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home">
                            <span className="fas fa-clipboard-list"></span>
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home">
                            <span className="fas fa-shopping-bag"></span>
                            <span>Orders</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home">
                            <span className="fas fa-box-open"></span>
                            <span>Inventory</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home">
                            <span className="fas fa-user-circle"></span>
                            <span>Accounts</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home">
                            <span className="fas fa-clipboard-check"></span>
                            <span>Tasks</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Sidebar;
