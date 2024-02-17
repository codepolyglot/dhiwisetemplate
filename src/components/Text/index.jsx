import React from "react";

const sizeClasses = {
  txtLatoBold16: "font-bold font-lato",
  txtLatoRegular18: "font-lato font-normal",
  txtLatoRegular16: "font-lato font-normal",
  txtLatoRegular16Deeppurple100: "font-lato font-normal",
  txtLatoRegular100: "font-lato font-normal",
  txtLatoBold24: "font-bold font-lato",
  txtLatoBlack48: "font-black font-lato",
  txtLatoBlack36: "font-black font-lato",
  txtLatoBlack24: "font-black font-lato",
  txtLatoRegular14: "font-lato font-normal",
  txtLatoRegular36: "font-lato font-normal",
  txtLatoBlack18: "font-black font-lato",
  txtLatoRegular11: "font-lato font-normal",
  txtLatoRegular16WhiteA700b2: "font-lato font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
