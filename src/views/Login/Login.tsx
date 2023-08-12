import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "../../context/UserContext"
import { authWithGoogle } from "../../services/firebase/auth_google"

const Login = () => {
  const navigate = useNavigate()
  const { user, loading } = useContext(UserContext)

  useEffect(() => {
    if (user) navigate("/")
  }, [user])

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <button onClick={authWithGoogle}>Login with google</button>
      )}
    </div>
  )
}

export default Login
