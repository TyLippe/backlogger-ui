import React, { ChangeEventHandler } from "react";

export const SearchInput = ({
  handleChange,
  name,
  value,
}: {
  handleChange: ChangeEventHandler;
  name: string;
  value: string;
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        name={name}
        value={value}
      />
    </div>
  );
};
