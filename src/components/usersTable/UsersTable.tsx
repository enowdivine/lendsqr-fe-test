import React, { useEffect } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { BsFilter } from "react-icons/bs";
import Moment from "react-moment";
// importing table filter component
import TableFilter from "../tableFilter/TableFilter";
import UsersOptions from "../usersOption/UsersOptions";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { allUsers } from "../../redux/reducers/usersReducer";

const UsersTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users?.users);

  useEffect(() => {
    dispatch(allUsers());
  }, []);

  return (
    <table className="table-users">
      <thead>
        <tr>
          <th>
            <TableFilter>
              ORGANIZATION{" "}
              <span>
                <BsFilter />
              </span>
            </TableFilter>
          </th>
          <th>
            <TableFilter>
              USERNAME{" "}
              <span>
                <BsFilter />
              </span>
            </TableFilter>
          </th>
          <th>
            <TableFilter>
              EMAIL{" "}
              <span>
                <BsFilter />
              </span>
            </TableFilter>
          </th>
          <th>
            <TableFilter>
              PHONE NUMBER{" "}
              <span>
                <BsFilter />
              </span>
            </TableFilter>
          </th>
          <th>
            <TableFilter>
              DATE JOINED{" "}
              <span>
                <BsFilter />
              </span>
            </TableFilter>
          </th>
          <th>
            <TableFilter>
              STATUS{" "}
              <span>
                <BsFilter />
              </span>
            </TableFilter>
          </th>
        </tr>
      </thead>
      <tbody>
        {users?.slice(0, 10).map((user: any, index) => {
          return (
            <tr key={user.id}>
              <td>{user?.orgName}</td>
              <td>{user?.userName}</td>
              <td>{user?.email}</td>
              <td>{user?.phoneNumber}</td>
              <td>
                <Moment format="MM:DD:YYYY - HH:mm">{user?.createdAt}</Moment>
              </td>
              <td>{user?.status}</td>
              <td>
                <UsersOptions userId={user?.id}>
                  <SlOptionsVertical />
                </UsersOptions>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UsersTable;
