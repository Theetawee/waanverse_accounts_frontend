export interface UserType {
    location: string;
    joined: string;
    date_of_birth: string|null;
    email: string;
    name: string;
    id: number;
    username: string;
    phone: string|null;
    gender: "male" | "female"|"other"|null;
    image: string | null;
    profile_image_hash: string;
    bio: string | null;
    verified: boolean;
    is_following: number;
    is_followed_by: number;
    is_waany: boolean;
    badges: BadgeType[];
    access_key: string;
}



export interface SignupFormData {
    email: string;
    password1: string;
    password2: string;
    name: string;
    username: string;
    country: string;
    phone: string;
    gender: "male" | "female" | "other";
    date_of_birth: string;
}


export interface TopBarContextType{
    title: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>
    back: boolean,
    setBack: React.Dispatch<React.SetStateAction<boolean>>
}


export interface BadgeType{
    id: number;
    name: string;
    description: string;
    image: string;
    image_hash: string;
    added_on: string;
    updated_on: string;
    value: number;
}


export interface EditableUserInfoType{
    name?: string;
    date?: Date;
    gender?: string;
    phone?: string;
    location?: string;
}
