
import PropTypes from 'prop-types';
const AuthFormBody = (props) => {
    
  return (
    <div>
        <form action="submit">
                <div>
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="Email" placeholder="Enter Your Email"/>
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="password" id="Password" placeholder="Enter Password"/>
                </div>
                
                <button type="submit">{props.buttonValue}</button>
            </form>
    </div>
  )


}

AuthFormBody.propTypes = {
    buttonValue: PropTypes.string.isRequired, // Assuming buttonValue should be a required string
  };

export default AuthFormBody