import { NavLink } from "react-router-dom";

const DashBoardHeader = () => {
  return (
    <div>
      <div>
        <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", background:"rgb(29, 29, 97)"}}>
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            <button style={{ width:"80px",backgroundColor: "red", color: "white", border: "none", padding: "10px 20px", borderRadius: "4px" }}>Logout</button>
          </NavLink>
          <input type="text" id="searchBar" placeholder="Search Here" style={{ flex: "1", marginLeft: "10px", padding: "5px", border: "1px solid #ccc", borderRadius: "4px" }} />
        </nav>
      </div>
    </div>
  );
};

export default DashBoardHeader;
