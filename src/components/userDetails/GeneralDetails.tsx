import React from "react";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const GeneralDetails = () => {
  const result = useSelector((state: RootState) => state.users?.user);
  const user: any = result;

  return (
    <div className="general-info">
      <div className="personal-information">
        <h3>Personal Information</h3>
        <div className="info">
          <div>
            <span>FULL NAME</span>
            <h3>
              {user?.profile.firstName} {user?.profile.lastName}
            </h3>
          </div>
          <div>
            <span>PHONE NUMBER</span>
            <h3>{user?.phoneNumber}</h3>
          </div>
          <div>
            <span>EMAIL ADDRESS</span>
            <h3>{user?.email}</h3>
          </div>
          <div>
            <span>BVN</span>
            <h3>{user?.profile.bvn}</h3>
          </div>
          <div>
            <span>GENDER</span>
            <h3>{user?.profile.gender}</h3>
          </div>
          <div>
            <span>MARITAL STATUS</span>
            <h3>{"Single"}</h3>
          </div>
          <div>
            <span>CHILDREN</span>
            <h3>None</h3>
          </div>
          <div>
            <span>TYPE OF RESIDENCE</span>
            <h3>Parent's Apartment</h3>
          </div>
        </div>
      </div>
      <div className="education-and-employment">
        <h3>Education and Employment</h3>
        <div className="info">
          <div>
            <span>LEVEL OF EDUCATION</span>
            <h3>{user?.education.level}</h3>
          </div>
          <div>
            <span>EMPLOYMENT STATUS</span>
            <h3>{user?.education.employmentStatus}</h3>
          </div>
          <div>
            <span>SECTOR OF EMPLOYMENT</span>
            <h3>{user?.education.sector}</h3>
          </div>
          <div>
            <span>DURATION OF EMPLOYMENT</span>
            <h3>{user?.education.duration}</h3>
          </div>
          <div>
            <span>OFFICE EMAIL</span>
            <h3>{user?.education.officeEmail}</h3>
          </div>
          <div>
            <span>MONTHLY INCOME</span>
            <h3>{user?.education.monthlyIncome[0]}</h3>
          </div>
          <div>
            <span>LOAN REPAYMENT</span>
            <h3>{user?.education.loanRepayment}</h3>
          </div>
        </div>
      </div>
      <div className="socials">
        <h3>Socials</h3>
        <div className="info">
          <div>
            <span>TWITTER</span>
            <h3>{user?.socials.twitter}</h3>
          </div>
          <div>
            <span>FACEBOOK</span>
            <h3>{user?.socials.facebook}</h3>
          </div>
          <div>
            <span>INSTAGRAM</span>
            <h3>{user?.socials.instagram}</h3>
          </div>
        </div>
      </div>
      <div className="guarantor">
        <h3>Guarantor</h3>
        <div className="info">
          <div>
            <span>FULL NAME</span>
            <h3>
              {user?.guarantor.firstName} {user?.guarantor.lastName}
            </h3>
          </div>
          <div>
            <span>PHONE NUMBER</span>
            <h3>{user?.guarantor.phoneNumber}</h3>
          </div>
          <div>
            <span>EMAIL ADDRESS</span>
            <h3>{user?.userName}@gmail.com</h3>
          </div>
          <div>
            <span>RELATIONSHIP</span>
            <h3>Sister</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDetails;
