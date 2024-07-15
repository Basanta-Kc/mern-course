import "./App.css";
import { useQuery } from "./Weather";

function Users() {
  const {
    data: users,
    status,
    errorMssg,
  } = useQuery([], "https://jsonplaceholder.typicode.com/users");



  return (
    <>
      <h1>Users</h1>
      <div>
        {status === "idle" && <p>Fetching user.</p>}
        {status === "loading" && <p>Loading...</p>}
        {status === "error" && <p>Error: {errorMssg} </p>}
        {status === "success" && (
          <div>
            {users.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Users;
