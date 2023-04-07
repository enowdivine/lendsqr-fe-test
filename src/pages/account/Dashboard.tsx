import React, { useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Cards from "../../layouts/Card";
import { TbCoins, TbReportMoney } from "react-icons/tb";
import { HiOutlineUsers, HiOutlineUserGroup } from "react-icons/hi";
import UsersTable from "../../components/usersTable/UsersTable";
import UsersRange from "../../components/tableRange/TableRange";
import Pagination from "../../components/pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { allUsers } from "../../redux/reducers/usersReducer";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    dispatch(allUsers());
  }, []);

  const numberOfUsers = users?.length;

  const formatValue = (amount: number) => {
    let dollarUSLocale = Intl.NumberFormat("en-US");
    return dollarUSLocale.format(amount);
  };

  return (
    <DashboardLayout>
      <h4>Users</h4>
      <div className="info-cards">
        <Cards
          icon={<HiOutlineUsers />}
          text="USERS"
          value={formatValue(numberOfUsers)}
          bgColor="rgba(223, 24, 255, 0.1)"
          color="#DF18FF"
        />
        <Cards
          icon={<HiOutlineUserGroup />}
          text="ACTIVE USERS"
          value={formatValue(2453)}
          bgColor="rgba(87, 24, 255, 0.1)"
          color="#5718FF"
        />
        <Cards
          icon={<TbReportMoney />}
          text="USERS WITH LOANS"
          value={formatValue(12453)}
          bgColor="rgba(245, 95, 68, 0.1)"
          color="#F55F44"
        />
        <Cards
          icon={<TbCoins />}
          text="USERS WITH SAVINGS"
          value={formatValue(102453)}
          bgColor="rgba(255, 51, 102, 0.1)"
          color="#FF3366"
        />
      </div>
      <div className="users-table">
        <UsersTable />
      </div>
      <div className="table-range">
        <span>
          Showing <UsersRange /> out of {numberOfUsers}
        </span>
        <span>
          <Pagination />
        </span>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
