import { Invite } from "../types/Invite.dto";
import { TeamMember } from "../types/TeamMember.dto";
import { ArrowRightIcon } from "./svgs/ArrowRightIcon";

const Users = ({ users, invites, role }: any) => {
  return (
    <ul>
      {users.map((user: TeamMember) =>
        user.role === role ? (
          <li key={user.id}>
            {`${user.user.name} ${user.user.lastName}`}
            <ArrowRightIcon />
          </li>
        ) : null
      )}
      {invites.map((invite: Invite) =>
        invite.role === role ? (
          <li key={invite.id}>
            {`${invite.phone}`}
            <div>
              <span>Invited</span>
              <ArrowRightIcon />
            </div>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default Users;
