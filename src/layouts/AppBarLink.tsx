import { NavLink } from "react-router-dom";

const AppBarLink = ({ path, label }: { path: string; label: string }) => {
    return (
        <span className="text-center">
            <NavLink className={"appbarlink"} to={path}>{label}</NavLink>
        </span>
    );
};

export default AppBarLink;
