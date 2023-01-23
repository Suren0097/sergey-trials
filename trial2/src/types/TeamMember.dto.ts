import { Role } from "./Role.dto";
import { Status } from "./Status.dto";
import { UserShortData } from "./UserShortData.dto";

export interface TeamMember {
    id: number;
    status: Status;
    user: UserShortData;
    role: Role;
}