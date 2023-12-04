import { useEffect, useState } from "react";
import Header from "../common/Header";
import { Link } from "react-router-dom";

const ListUser = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:4000/users");
    const data = await res.json();
    setUsers(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row py-4">
          <div className="col-md-6">
            <h3>Users</h3>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/users/create" className="btn btn-primary">
              Create User
            </Link>
          </div>
        </div>
        <div className="card border-0 shadow p-3 ">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th width="150">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>
                      <Link
                        to={`/users/edit/${user.id}`}
                        className="btn btn-primary"
                      >
                        Edit
                      </Link>
                      <Link href="#" className="btn btn-danger ms-1">
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      ;
    </>
  );
};

export default ListUser;
