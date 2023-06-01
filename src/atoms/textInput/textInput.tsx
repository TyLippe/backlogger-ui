import React, { ChangeEventHandler } from "react";

import "./textInput.scss";

export const TextInput = ({
  handleChange,
  handleSubmit,
  name,
  value,
  placeholder,
  submitText,
}: {
  handleChange: ChangeEventHandler;
  handleSubmit: any;
  name: string;
  value: string;
  placeholder: string;
  submitText: string;
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          name={name}
          value={value}
        />
        <input type="submit" value={submitText} />
      </form>
    </div>
  );
};
