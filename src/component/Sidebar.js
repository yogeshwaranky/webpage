import {Link} from 'react-router-dom';


function Sidebar() {
  return (
    <>
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider my-0" />

        
        <li class="nav-item active">
          <Link class="nav-link" to="/">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/tables">
            <i class="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/buttons">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Buttons</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/cards">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Cards</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/colors">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Colors</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/login">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Login</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/charts">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        {/* <!-- Sidebar Message --> */}
        <div class="sidebar-card d-none d-lg-flex">
          <img
            class="sidebar-card-illustration mb-2"
            src="img/undraw_rocket.svg"
            alt="..."
          />
          <p class="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            class="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
    </>
  );
}

export default Sidebar;
