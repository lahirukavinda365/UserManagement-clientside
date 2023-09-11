import "../Pages/PageStyles/HomePage.css"

const HomePage = () => {
  return (
    <div className="hPage">
        <div className="container" style={{position:"absolute",top:"50%",left:"45%"}}>
         <div>
            <h3>Welcome To the Center View</h3>
            <p>Help Us to Manage Yourself</p>
         </div>
         <div>
            <button>Sign In</button>
            <button>Sign Up</button>
         </div>
         </div>
    </div>
  );
}

export default HomePage;
