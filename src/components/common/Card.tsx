import { IconType } from "react-icons";


interface props{
    icon: IconType,
    name: string,
    description: string

}




const Card = ({ icon:Icon,name,description }: props) => {
  return (
      <div className="p-4 w-full h-52 flex items-center justify-center flex-col sm:w-[18rem] mx-auto m-6 text-center bg-white rounded-xl border-gray-100 border cursor-pointer">
          <Icon className="w-8 h-8 mx-auto mb-2 text-gray-500" />
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-lg text-gray-600">
              {description}
          </p>
      </div>
  );
}

export default Card
