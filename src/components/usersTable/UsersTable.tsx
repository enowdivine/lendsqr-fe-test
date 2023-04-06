import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { BsFilter } from "react-icons/bs";

const UsersTable = () => {
  return (
    <table className="table-users">
      <thead>
        <tr>
          <th>
            ORGANIZATION{" "}
            <span>
              <BsFilter />
            </span>
          </th>
          <th>
            USERNAME{" "}
            <span>
              <BsFilter />
            </span>
          </th>
          <th>
            EMAIL{" "}
            <span>
              <BsFilter />
            </span>
          </th>
          <th>
            PHONE NUMBER{" "}
            <span>
              <BsFilter />
            </span>
          </th>
          <th>
            DATE JOINED{" "}
            <span>
              <BsFilter />
            </span>
          </th>
          <th>
            STATUS{" "}
            <span>
              <BsFilter />
            </span>
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
            <SlOptionsVertical />
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
            <SlOptionsVertical />
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
            <SlOptionsVertical />
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
            <SlOptionsVertical />
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
            <SlOptionsVertical />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default UsersTable;
