import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Loader from "../Components/Loader";

const Privetroute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children;

    }
    return <Navigate state={location.pathname} to='/signin'></Navigate>

};

export default Privetroute;