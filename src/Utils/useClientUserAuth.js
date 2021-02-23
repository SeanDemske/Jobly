import { useHistory } from "react-router-dom";

const useClientUserAuth = (currentUser) => {
    const history = useHistory();
    if (currentUser !== null) {
        return true
    } else {
        history.push("/login");
    }
}

export default useClientUserAuth;