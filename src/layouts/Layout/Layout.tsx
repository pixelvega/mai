import { ReactNode, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import { UserContext } from "../../context/UserContext"
import { handleSignOut } from "../../services/firebase/auth_google"

import css from "./Layout.module.scss"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate("/login")
  }, [user])

  return (
    <main className={css.main}>
      {children}
      <div className={css.navBarContainer}>
        <button onClick={handleSignOut}>LOGOUT</button>

        <Link to="/list-of-messages">List of messages</Link>
      </div>
    </main>
  )
}

export default Layout
