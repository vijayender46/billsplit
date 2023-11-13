import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <NavLink exact activeClassName='is-active' to="/ScenarioOne">Scenario One</NavLink>
        <NavLink to="/ScenarioTwo">Scenario Two</NavLink>
        <NavLink to="/ScenarioThree">Scenario Three</NavLink>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;