import { NavLink } from "react-router-dom"
const DashBoardHeader = () => {
  return (
    <div>
        <div>
            <nav style={{background:"blue"}}>
                <NavLink to={"/"}><button>Logout</button></NavLink>
                <input type="text" id="searchBar" placeholder="Search Here" />
            </nav>
        </div>
        
    </div>
  )
}

export default DashBoardHeader