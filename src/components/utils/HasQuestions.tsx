import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const HasQuestions = () => {
    const { userInfo } = useContext(AuthContext);
    if (userInfo?.has_security_questions) {
        return <Navigate to="/account" />;
    } else {
        return <Outlet />;
    }
};

export default HasQuestions;
