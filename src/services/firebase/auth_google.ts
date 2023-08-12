import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { provider } from "./auth_google_provider_create"
import { auth } from "./firebase_config"

export const authWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, provider)
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(response)
    const token = credential?.accessToken
    // The signed-in user info.
    const user = response.user
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    return { user, token }
  } catch (error: any) {
    // Handle Errors here.
    const errorCode = error.code
    const errorMessage = error.message
    // The email of the user's account used.
    const email = error.customData.email
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error)
    // ...
    console.error(error)
    return error
  }
}

export const handleSignOut = async () => {
  try {
    await signOut(auth)
    return true
  } catch (error) {
    console.error(error)
    return error
  }
}
