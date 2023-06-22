import { User } from "./User";

export interface Order {
    orderId: number;
    user: User;
    userLastName: string;
    email: string; 
    password: string;
    role: string;
}