import React, { useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import StarRating from "../../components/starRating/StarRating";
import GeneralDetails from "../../components/userDetails/GeneralDetails";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { singleUser } from "../../redux/reducers/usersReducer";

const UserDetails = () => {
  const [switchTabs, setSwitchTabs] = useState("general");

  const urlParams = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const result = useSelector((state: RootState) => state.users?.user);

  useEffect(() => {
    dispatch(singleUser(urlParams?.id!));
  }, []);
  const user: any = result;

  return (
    <DashboardLayout>
      <div className="user-details">
        <div className="go-back">
          <Link to="/users">
            <span>
              <HiOutlineArrowNarrowLeft />
            </span>
            Back to Users
          </Link>
        </div>
        <div className="details">
          <h4>User Details</h4>
          <div className="btns">
            <button className="blacklist-user">Blacklist User</button>
            <button className="activate-user">Activate User</button>
          </div>
        </div>
        <div className="user-info">
          <div className="profile-summary">
            <div className="profile-image">
              <span>
                <BiUser />
              </span>
            </div>
            <div className="username">
              <h2>
                {user?.profile.firstName} {user?.profile.lastName}
              </h2>
              <span>{user?.accountNumber}</span>
            </div>
            <div className="tier">
              <p>User's Tier</p>
              <span>
                <StarRating />
              </span>
            </div>
            <div className="balance">
              <h2>
                {user?.profile.currency}
                {user?.accountBalance}
              </h2>
              <span>{user?.profile.bvn}/Providus Bank</span>
            </div>
          </div>
          {/* tab headers */}
          <div className="tab-headers">
            <div
              className="general-details"
              tabIndex={1}
              onClick={() => setSwitchTabs("general")}
            >
              General Details
            </div>
            <div
              className="documents"
              tabIndex={2}
              onClick={() => setSwitchTabs("documents")}
            >
              Documents
            </div>
            <div
              className="bank-details"
              tabIndex={3}
              onClick={() => setSwitchTabs("bankDetails")}
            >
              Bank Details
            </div>
            <div
              className="loans"
              tabIndex={4}
              onClick={() => setSwitchTabs("loans")}
            >
              Loans
            </div>
            <div
              className="savings"
              tabIndex={5}
              onClick={() => setSwitchTabs("savings")}
            >
              Savings
            </div>
            <div
              className="app-and-system"
              tabIndex={6}
              onClick={() => setSwitchTabs("appAndSystem")}
            >
              App and System
            </div>
          </div>
        </div>
        {/* details depending on the header clicked */}
        <div className="tab-bodies">
          {switchTabs === "general" ? (
            <GeneralDetails />
          ) : switchTabs === "documents" ? (
            "Documents"
          ) : switchTabs === "bankDetails" ? (
            "Bank Details"
          ) : switchTabs === "loans" ? (
            "Loans"
          ) : switchTabs === "appAndSystem" ? (
            "App and System"
          ) : switchTabs === "savings" ? (
            "Savings"
          ) : (
            ""
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDetails;
