import PropTypes from 'prop-types';
const AuthFormBody = (props) => {
    
  return (
    <div style={{ backgroundColor: "gray", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <form style={{ backgroundColor: "white", width: "50%", height: "250px", padding: "20px", borderRadius: "8px" }}>
            
            <div>
                <label style={{ textAlign: "start", width: "50%" }} htmlFor="Email">Email</label>
                <input style={{ width: "100%", height: "25px" }} type="email" id="Email" placeholder="Enter Your Email" />
            </div>
            
            <div>
                <label style={{ textAlign: "start", width: "50%" }} htmlFor="Password">Password</label>
                <input style={{ width: "100%", height: "25px" }} type="password" id="Password" placeholder="Enter Password" />
            </div>
            
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button type="submit">{props.buttonValue}</button>
            </div>
        </form>
    </div>
  )
}

AuthFormBody.propTypes = {
    buttonValue: PropTypes.string.isRequired,
};

export default AuthFormBody;
