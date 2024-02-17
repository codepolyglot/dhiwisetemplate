import React from "react";

import { Radio, Text } from "components";

const LandingHistoryitem = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[7px] items-end justify-start pt-0.5 w-full">
          <Radio
            value="UIUXDesigner"
            className="font-black font-lato leading-[normal] text-[22px] text-left sm:text-lg text-white-A700 md:text-xl"
            inputClassName="bg-deep_purple-A400 border-4 border-blue_gray-900 border-solid h-[23px] mr-[5px] w-[23px]"
            checked={false}
            name="freelancer"
            label="UIUX Designer"
            id="UIUXDesigner"
          ></Radio>
          <div className="flex flex-col gap-[5px] items-start justify-start">
            <Text className="text-base text-white-A700" size="txtLatoRegular16">
              {props?.companyname}
            </Text>
            <Text
              className="text-base text-deep_purple-100"
              size="txtLatoRegular16Deeppurple100"
            >
              {props?.employmentperiod}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

LandingHistoryitem.defaultProps = {
  companyname: "at Second Company",
  employmentperiod: "2012 - 2013",
};

export default LandingHistoryitem;
