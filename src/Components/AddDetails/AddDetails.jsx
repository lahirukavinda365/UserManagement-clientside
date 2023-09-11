
const AddDetails = () => {
  return (
    <div>
        <form action="POST">
            <div>
                <h5>Personal Details</h5>
                <div style={{display:"flex"}}>
                    <div>
                        <label htmlFor="empID">Employee ID</label>
                        <input type="text" placeholder="Employee ID" id="empID"/>
                    </div>
                    <div>
                        <label htmlFor="fName">First Name</label>
                        <input type="text" id="fName" placeholder="First Name"/>
                    </div>
                    <div>
                        <label htmlFor="lName">Last Name</label>
                        <input type="text" id="lName" placeholder="Last Name"/>
                    </div>
                    
                </div>
                <div style={{display:"flex"}} >
                    <div>
                        <label htmlFor="Email">Your E-mail</label>
                        <input type="email" id="Email" placeholder="Your E-mail"/>
                    </div>
                    <div>
                        <label htmlFor="pNo">Telephone</label>
                        <input type="text"  id="pNo" placeholder="Telephone"/>
                    </div>
                    <div>
                        <label htmlFor="doj">Joining Date:</label>
                        <input type="text" id="doj"/>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div>
                <h5>Employment Details</h5>
                

                
                <div style={{display:"flex"}}>
                    <label htmlFor="depId">Department ID</label>
                    <input type="text" id="depId" placeholder="Department ID" />

                    <label htmlFor="depName">Department Name</label>
                    <input type="text" id="depName" placeholder="Department Name" />

                    <label htmlFor="ManagerName">ManagerName</label>
                    <input type="text" id="ManagerName" placeholder="Manager Name" />
                </div>
                <div style={{display:"flex"}}>
                    <label htmlFor="mngEmail">Manager Email</label>
                    <input type="text" id="mngEmail" placeholder="Manager Email" />

                    <label htmlFor="positionID">Position ID</label>
                    <input type="text" id="positionID" placeholder="Position ID" />

                    <label htmlFor="positionTitle">Position Title</label>
                    <input type="text" id="positionTitle" placeholder="Position Title" />
                </div>
            </div>
            <div>                
                <button>Close</button>
                <button>Save Details</button>
            </div>
        </form>
    </div>
  )
}

export default AddDetails