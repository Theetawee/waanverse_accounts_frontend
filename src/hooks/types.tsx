export interface UserType {
    country: string;
    joined: string;
    date_of_birth: string;
    email: string;
    name: string;
    id: number;
    username: string;
    phone: string;
    gender: "male" | "female"|"other";
    image: string;
    image_hash: string;
}

export interface AuthContextDataType {
    isAuthenticated: boolean;
    userInfo: UserType | null;
    AuthenticateUser: (user: UserType) => void;
    setFastRefresh: React.Dispatch<React.SetStateAction<boolean>>;
    isOnline: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logout: () => any;
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
