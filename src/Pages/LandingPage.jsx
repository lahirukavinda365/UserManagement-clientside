import AddDetails from "../Components/AddDetails/AddDetails"

const LandingPage = () => {
  return (
    <div>
        <div style={{textAlign:"center"}}>
            <button>Add Your Details Here</button>
            <button>Edit My Profile</button>
            <button>Logout</button>
        </div>

        <div>
             <AddDetails />
        </div>
    </div>
  )
}

export default LandingPage