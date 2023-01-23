import { Invite } from "../types/Invite.dto"
import { TeamMember } from "../types/TeamMember.dto"


export const Users = {
    getUsers: () => {
        return new Promise((resolve, reject) => {
            const users: TeamMember[] = [
                {
                    id: 1,
                    status: "request",
                    user: {
                        id: 10000,
                        name: "John",
                        lastName: "Doe",
                        phone: "34234234234",
                        email: "john@doe.com",
                    },
                    role: "Administrator"
                },
                {
                    id: 2,
                    status: "request",
                    user: {
                        id: 10001,
                        name: "Vzgo",
                        lastName: "Manasyan",
                        phone: "6456456456",
                        email: "vzgo@manasyan.com",
                    },
                    role: "Standard"
                }
            ];
            setTimeout(() => {
                resolve(users);
            }, 2000);
        });
    },
    getInvites: () => {
        return new Promise((resolve, reject) => {
            const invites: Invite[] = [
                {
                    id: 1,
                    phone: "34234234234",
                    role: "Standard"
                },
                {
                    id: 2,
                    phone: "6456456456",
                    role: "Administrator"
                },
            ];
            setTimeout(() => {
                resolve(invites);
            }, 2000);
        });
    }
}