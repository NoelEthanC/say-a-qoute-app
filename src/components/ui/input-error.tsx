import React from "react";

const InputError = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-red-500 my-3  text-base text-left">{children}</div>
  );
};

export default InputError;
