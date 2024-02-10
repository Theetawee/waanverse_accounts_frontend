/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import TextInput from "../../common/Inputs/TextInput";
import { AuthContext } from "../../../context/AuthContext";
import CountrySelector from "../../common/CountrySelector";
import GenderSelect from "../../common/Inputs/GenderSelect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs";
import utils from "../../../hooks/utils";
import toast from "react-hot-toast";
import Endpoints from "../../../hooks/Endpoints";
import Loader from "../../common/Loader";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";

const InfoFields = () => {
    const navigate = useNavigate();

    const client = useQueryClient();
    const { updateUserInfo } = Endpoints();
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const { userInfo, setFastRefresh } = useContext(AuthContext);
    const [location, setLocation] = useState(userInfo?.location || "");
    const [gender, setGender] = useState(userInfo?.gender || "");
    const [formData, setFormData] = useState({
        name: userInfo?.name,
        phone: userInfo?.phone || "",
    });
    const { validate_data } = utils();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const { mutateAsync, isPending: isLoading } = useMutation({
        mutationFn: (data: any) => updateUserInfo(data),
        onSuccess: () => {
            client.invalidateQueries({
                queryKey: ["user-info"],
            });
            setFastRefresh(true);
            toast.success("Profile updated successfully");
            navigate("/account/info");
        },
        onError: (error) => {
            if (isAxiosError(error)) {
                if (error.response?.data.phone) {
                    toast.error(error.response?.data.phone[0]);
                }
            } else {
                toast.error("Something went wrong");
            }
        },
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const phone = formData.get("phone")?.toString() || "";
        if (!validate_data("phone", phone)) {
            toast.error("Invalid phone number");
            return;
        }
        if (gender === "") {
            toast.error("Your gender is required");
            return;
        }
        if (location === "") {
            toast.error("Please provide your Country");
            return;
        }
        formData.append("location", location);
        formData.append("gender", gender);
        formData.append(
            "date_of_birth",
            startDate?.toISOString().slice(0, 10) || ""
        );
        const data = Object.fromEntries(formData.entries());

        mutateAsync(data);
    };

    const handleCountry = (country: { value: string; label: string }) => {
        setLocation(country.label);
    };

    const handleGender = (gender: { value: string; label: string }) => {
        setGender(gender.value);
    };

    return (
        <section>
            <form method="post" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-y-6">
                    {/* name */}
                    <div className="grid grid-cols-1 gap-2">
                        <p>Name</p>
                        <TextInput
                            id="waanverse_user_name"
                            setValue={true}
                            value={formData.name}
                            name="name"
                            label="Name"
                            onChange={handleChange}
                            required={true}
                            disabled={isLoading}
                            type="text"
                            auto_on={false}
                        />
                    </div>

                    {/* location */}
                    <div className="grid grid-cols-1 z-20 gap-2">
                        <div className="flex flex-col">
                            <p>Country</p> <p className="ml-1 font-bold text-primary-600 text-sm">Current: {location}</p>
                            </div>
                        <CountrySelector
                            name="location"
                            sendValue={handleCountry}
                        />
                    </div>

                    {/* phone */}
                    <div className="grid grid-cols-1 gap-2">
                        <p>Phone Number</p>
                        <TextInput
                            id="waanverse_phone_number"
                            setValue={true}
                            value={formData.phone}
                            name="phone"
                            label="Phone Number"
                            required={true}
                            disabled={isLoading}
                            onChange={handleChange}
                            type="text"
                            auto_on={false}
                        />
                    </div>
                    {/* gender */}
                    <div className="grid  grid-cols-1 gap-2">
                        <div className="flex flex-col">
                            <p>Gender</p> <p className="ml-1 font-bold text-primary-600 text-sm">Current: {gender}</p>
                        </div>
                        <GenderSelect sendValue={handleGender} />
                    </div>

                    {/* date of birth */}
                    <div className="grid grid-cols-1  gap-2">
                        <div className="flex flex-col">
                            <p>Date of Birth</p> <p className="ml-1 font-bold text-primary-600 text-sm">Current: {userInfo?.date_of_birth}</p>
                        </div>

                        <DatePicker
                            showIcon={true}
                            icon={<BsCalendar />}
                            selected={startDate}
                            className="block px-2 pb-2 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                            onChange={(date) => setStartDate(date)}
                        />
                    </div>
                    <div>
                        <p className="text-sm text-primary-600 dark:text-gray-300">
                            Your profile is private. We will not share your
                            information with anyone.
                        </p>
                        <div className="mt-10 flex items-center justify-between">
                            <button
                                disabled={isLoading}
                                className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded"
                            >
                                {isLoading ? <Loader /> : "Save"}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default InfoFields;
