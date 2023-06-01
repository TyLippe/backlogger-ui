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
    <div className="text-input-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          name={name}
          value={value}
          className="input"
        />
        <input type="submit" value={submitText} className="submit-button" />
      </form>
    </div>
  );
};
