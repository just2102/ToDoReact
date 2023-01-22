import { NavLink } from "react-router-dom";
import { logoutRequest } from "../../Redux/auth-reducer";
import { getIsAuthorized } from "../../Redux/auth-selector";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";


const Header = () => {
    let isAuthorized = useAppSelector(state=>getIsAuthorized(state))
    const dispatch = useAppDispatch()
    const onLogout = () => {
        dispatch(logoutRequest())
    }
    return ( 
        <header className="header">
            <span>Header</span>
            <span><NavLink to='/todos'>Todos</NavLink></span>
            <div className="login_section">
                {!isAuthorized && <NavLink to="/login">Login</NavLink>}
                {isAuthorized && <span onClick={onLogout}>Logout</span> }
            </div>
        </header>
     );
}
 
export default Header;