import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, Googleprovider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    return {
        user,
        errorMessage,
        handleGoogleLogin
    }
}

export default useFirebase;