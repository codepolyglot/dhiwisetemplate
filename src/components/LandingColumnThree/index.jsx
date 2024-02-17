import React from "react";

import { Line, Text } from "components";

const LandingColumnThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[83px] items-start justify-start w-full">
          <Text
            className="text-base text-white-A700_b2"
            size="txtLatoRegular16WhiteA700b2"
          >
            {props?.messagetext}
          </Text>
          <Line className="bg-white-A700_b2 h-px w-[88%]" />
        </div>
      </div>
    </>
  );
};

LandingColumnThree.defaultProps = { messagetext: "Write your message here*" };

export default LandingColumnThree;
