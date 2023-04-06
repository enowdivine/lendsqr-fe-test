import React from "react";
import { BiBriefcase } from "react-icons/bi";

const SwitchOrganization = () => {
  return (
    <div className="switch-org">
      <span>
        <BiBriefcase />
      </span>
      <select>
        <option>Switch Organization</option>
        <option value="200">Switch Organization</option>
        <option value="300">Switch Organization</option>
        <option value="400">Switch Organization</option>
        <option value="500">Switch Organization</option>
      </select>
    </div>
  );
};

export default SwitchOrganization;
