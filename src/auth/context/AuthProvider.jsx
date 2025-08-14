import PropTypes from "prop-types"
import { AuthContext } from "./AuthContext"
import { useReducer } from "react"
import { authreducer } from "./authReducer"
import { types } from "../types/types"

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user
    }
}
export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authreducer, {}, init);

    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: { id: 'Abc', name }
        };
        localStorage.setItem('user', JSON.stringify(action.payload));
        dispatch(action);
    }
    const logOut = () => {
        const action = {
            type: types.logout
        }
        localStorage.removeItem('user');
        dispatch(action);
    }

    console.log(authState, dispatch)
    return (
        <AuthContext.Provider value={{ logOut, login, ...authState }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}
