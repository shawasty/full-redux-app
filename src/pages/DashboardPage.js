import { NavLink } from 'react-router - dom';


const DashboardPage = ()=>{
    return (
        <section>
            <h1>Dashboard</h1>
            <p>This is the dashboard</p>

            <NavLink to='/posts' className= 'button'>
                View posts
            </NavLink>
        </section>
    )
}

export default DashboardPage