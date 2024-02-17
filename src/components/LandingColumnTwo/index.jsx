import React from "react";

import { Line, Text } from "components";

const LandingColumnTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <Text
            className="text-base text-white-A700_b2"
            size="txtLatoRegular16WhiteA700b2"
          >
            {props?.username}
          </Text>
          <Line className="bg-white-A700_b2 h-px mt-1 w-full" />
        </div>
      </div>
    </>
  );
};

LandingColumnTwo.defaultProps = { username: "What is your name? *" };

export default LandingColumnTwo;
