import { createContext, ReactElement, useEffect, useState } from "react"
import { onAuthStateChanged, User } from "firebase/auth"

import { auth } from "../services/firebase/firebase_config"

interface Props {
  children: ReactElement
}

const UserContext = createContext<{
  user: User | null
  loading: boolean
}>({
  user: null,
  loading: true,
})

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      setUser(user)
    })
  }, [])

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }
