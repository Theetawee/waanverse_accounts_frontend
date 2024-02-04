import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface Props{
    path: string;
    icon: IconType;
    label: string;
}



const AsideLink = ({path,icon:Icon,label}:Props) => {
  return (
      <>
          <span>
              <NavLink to={path} className="sideLink">
                  <div className="flex">
                      <span>
                          <Icon className="w-5 h-5"/>
                      </span>
                      <p className="ml-2">{label}</p>
                  </div>
              </NavLink>
          </span>
      </>
  );
}

export default AsideLink
