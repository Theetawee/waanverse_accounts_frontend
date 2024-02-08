import { BiSolidErrorAlt } from "react-icons/bi";



const DetailBlock = ({ label, value }: { label: string; value: string | null }) => {
    return (
        <>
            <div className="p-4 flex items-center justify-between  sm:grid sm:grid-cols-2">
                <p>{label}</p>
                <div className="ml-10">
                {value ? <div className="">{value}</div> : <div className="flex items-center">

                    <BiSolidErrorAlt className="text-red-400" />
                    <p className="text-red-400 ml-2">Missing {label}</p>

                    </div>}
                    </div>
            </div>
            <hr />
        </>
    );
};

export default DetailBlock;
