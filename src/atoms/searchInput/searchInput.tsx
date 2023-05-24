import React, { ChangeEventHandler } from "react";

export const SearchInput = ({
  handleChange,
  handleSubmit,
  name,
  value,
}: {
  handleChange: ChangeEventHandler;
  handleSubmit: any;
  name: string;
  value: string;
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          name={name}
          value={value}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};
