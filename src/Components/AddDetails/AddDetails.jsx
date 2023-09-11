const AddDetails = () => {
    return (
      <div style={{ backgroundColor: "gray", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <form style={{ backgroundColor: "white", width: "50%", padding: "20px", borderRadius: "8px" }}>
          <div>
            <h5>Personal Details</h5>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="empID">Employee ID</label>
                <input type="text" placeholder="Employee ID" id="empID" style={{ width: "100%" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="fName">First Name</label>
                <input type="text" id="fName" placeholder="First Name" style={{ width: "100%" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="lName">Last Name</label>
                <input type="text" id="lName" placeholder="Last Name" style={{ width: "100%" }} />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="Email">Your E-mail</label>
                <input type="email" id="Email" placeholder="Your E-mail" style={{ width: "100%" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="pNo">Telephone</label>
                <input type="text" id="pNo" placeholder="Telephone" style={{ width: "100%" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="doj">Joining Date:</label>
                <input type="text" id="doj" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <hr style={{ margin: "20px 0" }} />
          <div>
            <h5>Employment Details</h5>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="depId">Department ID</label>
                <input type="text" id="depId" placeholder="Department ID" style={{ width: "100%" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="depName">Department Name</label>
                <input type="text" id="depName" placeholder="Department Name" style={{ width: "100%" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="ManagerName">Manager Name</label>
                <input type="text" id="ManagerName" placeholder="Manager Name" style={{ width: "100%" }} />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                <label htmlFor="mngEmail">Manager Email</label>
                <input type="text" id="mngEmail" placeholder="Manager Email" style={{ width: "100%" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="positionID">Position ID</label>
                <input type="text" id="positionID" placeholder="Position ID" style={{ width: "100%" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label htmlFor="positionTitle">Position Title</label>
                <input type="text" id="positionTitle" placeholder="Position Title" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button style={{ backgroundColor: "red", color: "white", border: "none", padding: "10px 20px", borderRadius: "4px" }}>Close</button>
            <button style={{ color: "white", border: "none", padding: "10px 20px", borderRadius: "4px" }}>Save Details</button>
          </div>
        </form>
      </div>
    )
  }
  
  export default AddDetails;
  