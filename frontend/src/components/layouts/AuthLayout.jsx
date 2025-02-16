import React from "react";
import { Children } from "react";

export const AuthLayout = ({ title, description, children }) => {
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl font-bold mb-2 text-blue-600 text-center">
        {title}
      </h1>
      <p className="font-medium text-slate-500 text-center mb-2">
        {description}
      </p>
      {children}
    </div>
  );
};
