import { Navigate } from "react-router";

const PrivateRoute = ({ component: Component }) => {
    let userData = localStorage.getItem("dhruvDemo_user_data");
    if (userData) {
        userData = JSON.parse(userData);
    }
    return userData ? <Component /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;