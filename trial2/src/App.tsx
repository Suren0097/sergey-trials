import { useEffect, useState } from "react";
import "./App.css";
import { Users } from "./api/getUsers";
import UsersComponent from './components/Users' 
import { AdministratorIcon } from "./components/svgs/AdministratorIcon";
import { StandardUserIcon } from "./components/svgs/StandardUserIcon";

const App = () => {
  const [users, setUsers] = useState<any>([]);
  const [invites, setInvites] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([Users.getUsers(), Users.getInvites()])
      .then(([users, invites]) => {
        setUsers(users);
        setInvites(invites);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="app">
      <h2>
        <AdministratorIcon />
        Administrators
      </h2>
      <UsersComponent users={users} invites={invites} role="Administrator" />
      <h2>
        <StandardUserIcon />
        Standard Users
      </h2>
      <UsersComponent users={users} invites={invites} role="Standard" />
    </div>
  );
};

export default App;
