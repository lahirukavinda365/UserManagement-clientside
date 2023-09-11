import AuthFormBody from "../Components/AuthFormBody/AuthFormBody"

AuthFormBody

const SignUp = () => {
  return (
    <div style={{textAlign:"center"}}>
        <div>
            <h3>Sign Up To The System</h3>
        </div>
        <div>
            <AuthFormBody buttonValue="Sign Up"/>
        </div>
    </div>
  )
}

export default SignUp