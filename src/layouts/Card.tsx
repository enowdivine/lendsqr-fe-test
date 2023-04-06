import React, { FC } from "react";

export interface Props {
  icon?: React.ReactNode;
  text?: String;
  value?: String;
  bgColor: string;
  color: string;
}

const Cards: FC<Props> = ({ icon, text, value, bgColor, color }) => {
  return (
    <div className="card-wrapper">
      <div className="icon-div" style={{ backgroundColor: bgColor }}>
        <span className="icon" style={{ color: color }}>
          {icon}
        </span>
      </div>
      <p className="text">{text}</p>
      <p className="value">{value}</p>
    </div>
  );
};

export default Cards;
