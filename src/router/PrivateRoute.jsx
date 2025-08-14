import { useContext } from "react"
import PropTypes from "prop-types"
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";
import { useLastPathTwo } from "../hooks/useLastPathTwo";


export const PrivateRoute = ({ children }) => {
    const { logged } = useContext(AuthContext);
    useLastPathTwo()
    return (logged)
        ? children
        : <Navigate to={'/login'} />;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
