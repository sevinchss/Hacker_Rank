import cn from "./style.module.css";
import useGET from "../../utils/queries/useGet";

export default function Dashboard() {
  const { data: users } = useGET(["users"], "/users");
  return (
    <div className={`container ${cn.body}`}>
      <h1>Dashboard</h1>
      <h2>Registered Users</h2>
      <table className={cn.tb}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr>
              <td>{u._id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
