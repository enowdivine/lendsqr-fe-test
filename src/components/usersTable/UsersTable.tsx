import { SlOptionsVertical } from "react-icons/sl";
import { BsFilter } from "react-icons/bs";
// importing table filter component
import TableFilter from "../tableFilter/TableFilter";
import UsersOptions from "../usersOption/UsersOptions";

const UsersTable = () => {
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
        <tr>
          <td>organizaton</td>
          <td>username</td>
          <td>email</td>
          <td>phone numner</td>
          <td>date joined</td>
          <td>status</td>
          <td>
            <UsersOptions userId="123">
              <SlOptionsVertical />
            </UsersOptions>
          </td>
        </tr>
        <tr>
          <td>organizaton</td>
          <td>username</td>
          <td>email</td>
          <td>phone numner</td>
          <td>date joined</td>
          <td>status</td>
          <td>
            <UsersOptions>
              <SlOptionsVertical />
            </UsersOptions>
          </td>
        </tr>
        <tr>
          <td>organizaton</td>
          <td>username</td>
          <td>email</td>
          <td>phone numner</td>
          <td>date joined</td>
          <td>status</td>
          <td>
            <UsersOptions>
              <SlOptionsVertical />
            </UsersOptions>
          </td>
        </tr>
        <tr>
          <td>organizaton</td>
          <td>username</td>
          <td>email</td>
          <td>phone numner</td>
          <td>date joined</td>
          <td>status</td>
          <td>
            <UsersOptions>
              <SlOptionsVertical />
            </UsersOptions>
          </td>
        </tr>
        <tr>
          <td>organizaton</td>
          <td>username</td>
          <td>email</td>
          <td>phone numner</td>
          <td>date joined</td>
          <td>status</td>
          <td>
            <UsersOptions>
              <SlOptionsVertical />
            </UsersOptions>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UsersTable;
