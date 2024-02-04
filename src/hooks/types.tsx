export interface UserType {
    country: string;
    joined: string;
    date_of_birth: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
    phone: string;
    gender: "male" | "female"|"other";
    has_security_questions: boolean;
    image: string;
    image_hash: string;
}

export interface AuthContextDataType {
    isAuthenticated: boolean;
    userInfo: UserType | null;
    AuthenticateUser: (user: UserType) => void;
    setFastRefresh: React.Dispatch<React.SetStateAction<boolean>>;
    isOnline: boolean;
    logout: () => void;
}


export interface SignupFormData {
    email: string;
    password: string;
    confirm_password: string;
    first_name: string;
    last_name: string;
    country: string;
    phone: string;
    gender: "male" | "female" | "other";
    dob: string;
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
