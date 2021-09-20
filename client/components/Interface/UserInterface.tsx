export interface user {
    name: string;
    phone: string;
    email: string;
    address: string;
};


export interface UserCardTypes {
    user: user 
};

export interface UserResponse extends Array<user>{};
