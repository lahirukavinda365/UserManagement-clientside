import AuthFormBody from "../Components/AuthFormBody/AuthFormBody"
import "./PageStyles/AuthPage.css"

const SignIn = () => {
  return (
    <div className="sign-in" style={{textAlign:"center"}}>
        <div style={{alignItems:"center"}}>
            <h3>Sign in To The System</h3>
        </div>
        <div>
            <AuthFormBody buttonValue="Sign In"/>
        </div>
    </div>
  )
}

export default SignIn