import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
interface props {
    icon: IconType;
    name: string;
    description: string;
    path:string
}

const Card = ({ icon: Icon, name, description,path }: props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/account${path}`);
    }




    return (
        <div onClick={handleClick} className="p-4 w-full  shadow flex items-center justify-center flex-col sm:w-full  bg-white rounded-md border-gray-100 border cursor-pointer">
            <div className="bg-primary-600 rounded-full p-2 w-14 h-14 flex items-center justify-center">
                <Icon className="w-full h-full mx-auto  text-white " />
            </div>
            <div className="py-4 max-w-md mx-auto">
                <p className="text-xl">{name}</p>
                <p className="  text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default Card;
