import { NavLink } from "react-router-dom";

const DashboadPage = () => {
  <section>
    <h1>Dashboard</h1>
    <p>This is the dashboard</p>

    <NavLink to="/posts" className="button">
      View Posts
    </NavLink>
  </section>
}

export default DashboadPage; 