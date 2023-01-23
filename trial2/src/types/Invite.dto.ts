import { Role } from "./Role.dto";

export interface Invite {
    id: number;
    phone: string;
    role: Role;
}