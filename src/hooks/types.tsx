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
    image_hash: string;
    bio: string | null;
    verified: boolean;
    is_following: number;
    is_followed_by: number;
    is_waany: boolean;
    badges: BadgeType[];
}

export interface AuthContextDataType {
    isAuthenticated: boolean;
    userInfo: UserType | null;
    AuthenticateUser: (user: UserType) => void;
    setFastRefresh: React.Dispatch<React.SetStateAction<boolean>>;
    isOnline: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logout: () => any;
    serverOk:boolean
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


export interface QuestionType{
    id: number;
    question: string;
    created: string;
    category: "O" | "T";
    uses:"text"|"number"|"date"|"address"|"email"|"time";
}


export interface QuestionsSumitType{
    question1: string;
    question2: string;
    answer1: string;
    answer2: string;
}

export interface TopBarContextType{
    title: string,
    setTitle: React.Dispatch<React.SetStateAction<string>>
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
