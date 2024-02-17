import React from "react";

import { Button, Img, Line, List, Radio, Text } from "components";
import LandingColumnThree from "components/LandingColumnThree";
import LandingColumnTwo from "components/LandingColumnTwo";
import LandingHistoryitem from "components/LandingHistoryitem";

const LandingPage = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-lato sm:gap-10 md:gap-10 gap-[71px] items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="md:h-[1768px] sm:h-[2480px] h-[3131px] md:px-5 relative w-full">
            <div className="md:h-[1768px] sm:h-[2480px] h-[3131px] m-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[1003px] h-full items-end justify-start m-auto w-full">
                <div className="h-[486px] relative w-[86%] md:w-full">
                  <Img
                    className="h-[486px] m-auto object-cover w-full"
                    src="images/img_cover.png"
                    alt="cover"
                  />
                  <Img
                    className="absolute h-[25px] right-[11%] top-[14%] w-[25px]"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
                <div className="h-[1642px] md:h-[991px] relative w-full">
                  <div className="absolute bottom-[0] h-[1077px] md:h-[991px] inset-x-[0] mx-auto w-[92%] md:w-full">
                    <div className="absolute flex flex-col gap-[38px] justify-start right-[0] top-[0] w-[93%]">
                      <Img
                        className="h-[505px] mr-[833px]"
                        src="images/img_decorationdots.svg"
                        alt="decorationdots"
                      />
                      <Img
                        className="h-[297px] md:ml-[0] ml-[924px] w-[297px]"
                        src="images/img_triangle.svg"
                        alt="triangle"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-[991px] inset-x-[0] mx-auto object-cover w-full"
                      src="images/img_bitmap.png"
                      alt="bitmap"
                    />
                  </div>
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[621px] sm:h-auto object-cover w-full"
                        src="images/img_bitmap_621x1440.png"
                        alt="bitmap_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col items-center justify-start left-[9%] pl-5 top-[12%] w-[76%]">
                <div className="flex flex-col justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[52px] items-start justify-end md:ml-[0] ml-[184px] w-[83%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-[58px] items-start justify-between md:mt-0 mt-[186px] w-[64%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-[27%] sm:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            className="h-2.5"
                            src="images/img_settings.svg"
                            alt="settings"
                          />
                          <Img
                            className="h-[50px]"
                            src="images/img_settings_light_green_200.svg"
                            alt="settings_One"
                          />
                          <Text
                            className="mt-[18px] text-center text-light_green-200 text-sm"
                            size="txtLatoRegular14"
                          >
                            <span className="text-light_green-200 font-lato font-normal">
                              <>
                                Special Mention
                                <br />
                              </>
                            </span>
                            <span className="text-light_green-200 font-lato uppercase text-lg font-bold">
                              awards
                            </span>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start sm:mt-0 mt-[9px] w-[27%] sm:w-full">
                        <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                          <Img
                            className="h-[49px]"
                            src="images/img_warning.svg"
                            alt="warning"
                          />
                          <Text
                            className="text-center text-light_green-200 text-sm"
                            size="txtLatoRegular14"
                          >
                            <span className="text-light_green-200 font-lato font-normal">
                              <>
                                100k video
                                <br />
                              </>
                            </span>
                            <span className="text-light_green-200 font-lato uppercase text-lg font-bold">
                              Subscriber
                            </span>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-center justify-start sm:mt-0 mt-0.5 w-[27%] sm:w-full">
                        <Img
                          className="h-[57px]"
                          src="images/img_close.svg"
                          alt="close"
                        />
                        <Text
                          className="text-center text-light_green-200 text-sm"
                          size="txtLatoRegular14"
                        >
                          <span className="text-light_green-200 font-lato font-normal">
                            <>
                              Best Filmography
                              <br />
                            </>
                          </span>
                          <span className="text-light_green-200 font-lato uppercase text-lg font-bold">
                            Footage
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="md:h-[360px] h-[376px] relative w-[31%] md:w-full">
                      <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-center justify-start mx-auto rounded-[26px] shadow-bs1 top-[0] w-full">
                        <Img
                          className="h-[344px] md:h-auto object-cover rounded-[26px] w-full"
                          src="images/img_bitmap_344x269.png"
                          alt="bitmap_Two"
                        />
                      </div>
                      <div className="absolute border-2 border-solid bottom-[0] h-[360px] inset-x-[0] mx-auto purple_500_deep_purple_A400_border rounded-[24px] w-[91%]"></div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-[7px] w-full">
                    <Text
                      className="md:mt-0 mt-[183px] rotate-[90deg] md:text-5xl text-[100px] text-black-900_43 tracking-[-13.56px] uppercase"
                      size="txtLatoRegular100"
                    >
                      JohnDoe
                    </Text>
                    <div className="md:h-[750px] h-[753px] sm:h-[819px] relative w-4/5 md:w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-start justify-start left-[1%] my-auto p-4 w-[84%]"
                        style={{
                          backgroundImage: "url('images/img_group2.png')",
                        }}
                      >
                        <div className="flex sm:flex-col flex-row sm:gap-10 gap-[108px] items-center justify-start mb-[607px] mt-[82px] w-[88%] md:w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-center text-deep_purple-A400 sm:text-xl"
                            size="txtLatoBlack24"
                          >
                            WORK EXPERIENCE
                          </Text>
                          <Text
                            className="text-2xl md:text-[22px] text-center text-deep_purple-A400 sm:text-xl"
                            size="txtLatoBlack24"
                          >
                            SKILL AND EXPERTISE
                          </Text>
                        </div>
                      </div>
                      <LandingHistoryitem className="absolute bottom-[36%] flex flex-col items-center justify-start left-[0] w-1/5" />
                      <LandingHistoryitem
                        className="absolute flex flex-col items-center justify-start left-[0] top-[21%] w-1/5"
                        companyname="at Fourth Compnay"
                        employmentperiod="2015 - Present"
                      />
                      <LandingHistoryitem
                        className="absolute flex flex-col items-center justify-start left-[0] top-[37%] w-1/5"
                        companyname="at Third Company"
                        employmentperiod="2013 - 2015"
                      />
                      <LandingHistoryitem
                        className="absolute bottom-[20%] flex flex-col items-center justify-start left-[0] w-1/5"
                        companyname="at First Company"
                        employmentperiod="2009 - 2011"
                      />
                      <div className="absolute bottom-[14%] flex flex-col gap-10 items-center justify-start right-[0] w-[57%]">
                        <List
                          className="flex flex-col gap-12 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                            <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                              <div className="flex flex-row gap-4 items-start justify-start w-[54%] md:w-full">
                                <Img
                                  className="h-8 w-[33px]"
                                  src="images/img_settings_deep_purple_100.svg"
                                  alt="settings"
                                />
                                <Text
                                  className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtLatoBold24"
                                >
                                  UI Interface Design
                                </Text>
                              </div>
                              <div className="h-2.5 overflow-hidden relative w-full">
                                <div className="w-full h-full absolute bg-white_A700_1e rounded-[5px]"></div>
                                <div
                                  className="h-full absolute bg-gradient-to-r from-[#9c27b0] to-[#651fff]  rounded-[5px]"
                                  style={{ width: "91%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                            <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                              <div className="flex flex-row gap-4 items-start justify-start w-[36%] md:w-full">
                                <Img
                                  className="h-[29px] mb-0.5 w-[29px]"
                                  src="images/img_globe.svg"
                                  alt="globe"
                                />
                                <Text
                                  className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtLatoBold24"
                                >
                                  Icon Design
                                </Text>
                              </div>
                              <div className="h-2.5 overflow-hidden relative w-full">
                                <div className="w-full h-full absolute bg-white_A700_1e rounded-[5px]"></div>
                                <div
                                  className="h-full absolute bg-gradient-to-r from-[#9c27b0] to-[#651fff]  rounded-[5px]"
                                  style={{ width: "56%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                            <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                              <div className="flex flex-row gap-4 items-start justify-start w-[52%] md:w-full">
                                <Img
                                  className="h-[29px] mb-0.5 w-[29px]"
                                  src="images/img_globe_white_a700.svg"
                                  alt="globe"
                                />
                                <Text
                                  className="mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtLatoBold24"
                                >
                                  HTML Prototyping
                                </Text>
                              </div>
                              <div className="h-2.5 overflow-hidden relative w-full">
                                <div className="w-full h-full absolute bg-white_A700_1e rounded-[5px]"></div>
                                <div
                                  className="h-full absolute bg-gradient-to-r from-[#9c27b0] to-[#651fff]  rounded-[5px]"
                                  style={{ width: "75%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </List>
                        <List
                          className="flex flex-col gap-12 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col items-center justify-start pt-0.5 w-full">
                            <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                              <div className="flex flex-row gap-4 items-start justify-start w-2/5 md:w-full">
                                <Img
                                  className="h-[22px]"
                                  src="images/img_camera.svg"
                                  alt="camera"
                                />
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtLatoBold24"
                                >
                                  Photo Editing
                                </Text>
                              </div>
                              <div className="h-2.5 overflow-hidden relative w-full">
                                <div className="w-full h-full absolute bg-white_A700_1e rounded-[5px]"></div>
                                <div
                                  className="h-full absolute bg-gradient-to-r from-[#9c27b0] to-[#651fff]  rounded-[5px]"
                                  style={{ width: "93%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-center justify-start pt-0.5 w-full">
                            <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                              <div className="flex flex-row gap-4 items-start justify-start w-[53%] md:w-full">
                                <Img
                                  className="h-6 w-[23px]"
                                  src="images/img_close_white_a700.svg"
                                  alt="close"
                                />
                                <Text
                                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                                  size="txtLatoBold24"
                                >
                                  Graphic Illustrations
                                </Text>
                              </div>
                              <div className="h-2.5 overflow-hidden relative w-full">
                                <div className="w-full h-full absolute bg-white_A700_1e rounded-[5px]"></div>
                                <div
                                  className="h-full absolute bg-gradient-to-r from-[#9c27b0] to-[#651fff]  rounded-[5px]"
                                  style={{ width: "61%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col gap-4 items-start justify-start left-[8%] top-[1%] w-[10%]">
              <div className="flex flex-col items-center justify-start px-[7px] w-[52%] md:w-full">
                <Img
                  className="h-[55px] md:h-auto object-cover w-[55px]"
                  src="images/img_luxiprotfoliologo.png"
                  alt="luxiprotfoliolo"
                />
              </div>
              <div className="h-[396px] relative w-full">
                <div className="h-[396px] m-auto w-full">
                  <div className="absolute bg-deep_purple-900 h-[396px] inset-y-[0] left-[0] my-auto rounded-[16px] shadow-bs2 w-3/5"></div>
                  <div className="absolute flex flex-row inset-x-[0] items-center justify-evenly mx-auto top-[21%] w-[98%]">
                    <div className="bg-gradient  h-7 rotate-[180deg] rounded-[3px] w-[6%]"></div>
                    <div className="bg-black-900_cc flex flex-col items-end justify-end p-2.5 rounded-lg">
                      <Text
                        className="mr-1 text-lg text-white-A700"
                        size="txtLatoBlack18"
                      >
                        Home
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[19%] my-auto w-[23%]">
                  <Img
                    className="h-[29px] md:h-auto object-cover w-7 sm:w-full"
                    src="images/img_shape.png"
                    alt="shape"
                  />
                  <Img
                    className="h-7 ml-0.5 md:ml-[0] mt-[33px] w-7"
                    src="images/img_close_white_a700_28x28.svg"
                    alt="close_One"
                  />
                  <Img
                    className="h-[29px] md:h-auto mt-10 object-cover w-[29px]"
                    src="images/img_group.png"
                    alt="group"
                  />
                  <Img
                    className="h-[29px] md:h-auto mt-[37px] object-cover w-[29px]"
                    src="images/img_group_29x29.png"
                    alt="group_One"
                  />
                  <Img
                    className="h-[29px] md:h-auto ml-1 md:ml-[0] mt-[37px] object-cover"
                    src="images/img_group_29x21.png"
                    alt="group_Two"
                  />
                  <Img
                    className="h-[19px] md:h-auto mt-[29px] object-cover"
                    src="images/img_group_19x28.png"
                    alt="group_Three"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient1  flex flex-col items-center justify-start max-w-[1214px] mt-[94px] mx-auto pr-[33px] md:px-5 py-[33px] rounded-[49px] w-full">
            <div className="flex flex-col items-center justify-start my-0.5 w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
                  size="txtLatoRegular36"
                >
                  <span className="text-white-A700 font-lato font-normal">
                    What{" "}
                  </span>
                  <span className="text-white-A700 font-lato font-black">
                    Client Said
                  </span>
                </Text>
              </div>
              <div className="bg-deep_purple-100 h-[13px] mt-1.5 rounded-md w-[13px]"></div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-3 w-full">
                <div className="h-[339px] sm:h-[411px] relative w-[54%] md:w-full">
                  <div className="h-[339px] sm:h-[411px] m-auto w-full">
                    <Img
                      className="h-[339px] m-auto object-cover w-full"
                      src="images/img_portfoliomap.png"
                      alt="portfoliomap"
                    />
                    <div className="absolute flex sm:flex-col flex-row gap-3.5 h-max inset-y-[0] items-center justify-center my-auto right-[7%] w-[76%]">
                      <div className="bg-purple-500 h-[13px] sm:mt-0 my-[124px] rounded-md w-[13px]"></div>
                      <div className="flex md:h-[260px] h-[261px] justify-end relative w-[95%] sm:w-full">
                        <div className="flex flex-row h-full items-center justify-between mb-[11px] mt-auto mx-auto w-[85%]">
                          <div className="bg-purple-500 h-[13px] my-[83px] rounded-md w-[13px]"></div>
                          <div className="flex flex-col justify-start">
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="bg-purple-500 h-[13px] mb-[13px] rounded-md w-[13px]"></div>
                              <div className="bg-purple-500 h-[13px] mt-[13px] rounded-md w-[13px]"></div>
                            </div>
                            <div className="bg-purple-500 h-[13px] ml-2 md:ml-[0] mr-[228px] mt-[74px] rounded-md w-[13px]"></div>
                            <div className="bg-purple-500 h-[13px] md:ml-[0] ml-[189px] mr-[47px] mt-1.5 rounded-md w-[13px]"></div>
                            <div className="bg-purple-500 h-[13px] md:ml-[0] ml-[21px] mr-[215px] mt-[34px] rounded-md w-[13px]"></div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <div className="bg-white-A700_fc h-12 mt-[33px] rounded-[50%] shadow-bs3 w-12"></div>
                              <Img
                                className="h-12 md:h-auto mb-[33px] rounded-[50%] w-12"
                                src="images/img_oval.png"
                                alt="oval_Nine"
                              />
                            </div>
                            <Img
                              className="h-12 md:h-auto md:ml-[0] ml-[223px] mt-6 rounded-[50%] w-12"
                              src="images/img_oval_48x48.png"
                              alt="oval_Ten"
                            />
                            <Img
                              className="h-12 md:h-auto md:ml-[0] ml-[57px] mt-1.5 rounded-[50%] w-12"
                              src="images/img_oval_1.png"
                              alt="oval_Eleven"
                            />
                            <Img
                              className="h-12 md:h-auto md:ml-[0] ml-[388px] mt-[5px] rounded-[50%] w-12"
                              src="images/img_oval_2.png"
                              alt="oval_Twelve"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute md:h-[164px] h-[165px] left-[6%] top-[4%] w-[46%]">
                    <Img
                      className="h-[164px] m-auto"
                      src="images/img_rectangle.svg"
                      alt="rectangle_Three"
                    />
                    <div className="absolute flex flex-col gap-2 inset-x-[0] items-start justify-start mx-auto top-[7%]">
                      <Text
                        className="leading-[24.00px] text-base text-white-A700 w-full"
                        size="txtLatoRegular16"
                      >
                        Vestibulum faucibus eget erat eget pretium. Donec
                        commodo convallis ligula.
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtLatoBold16"
                      >
                        <span className="text-white-A700 font-lato text-left font-bold">
                          <>
                            John Doe <br />
                          </>
                        </span>
                        <span className="text-white-A700 font-lato text-left text-sm font-normal italic">
                          Company Dot Com
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-7 pt-0.5 w-[39%] md:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                    size="txtLatoBlack36"
                  >
                    Let’s work together
                  </Text>
                  <Text
                    className="leading-[28.00px] mt-[21px] text-lg text-white-A700 w-full"
                    size="txtLatoRegular18"
                  >
                    Ut sed eros finibus, placerat orci id, dapibus mauris.
                    Vestibulum consequat hendrerit lacus. In id nisi id neque
                    venenatis molestie. Quisque lacinia purus ut libero
                    facilisis, at vulputate sem maximus.{" "}
                  </Text>
                  <Button className="cursor-pointer font-black leading-[normal] min-w-[152px] mt-6 text-center text-sm uppercase">
                    Hire Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[65px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[553px] sm:h-auto object-cover w-full"
                src="images/img_bitmap_553x1440.png"
                alt="bitmap_Three"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[43px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1141px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col gap-2 items-center justify-start w-[18%] md:w-full">
              <Img
                className="h-[104px] md:h-auto object-cover w-1/2"
                src="images/img_luxiprotfoliologo_104x101.png"
                alt="luxiprotfoliolo_One"
              />
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700"
                  size="txtLatoBlack48"
                >
                  <span className="text-white-A700 font-lato font-black">
                    <>
                      John Doe
                      <br />
                    </>
                  </span>
                  <span className="md:text-[26px] sm:text-2xl text-white-A700 font-lato uppercase text-[28px] font-normal">
                    UX Designer
                  </span>
                </Text>
                <Img
                  className="h-[25px] mt-[43px]"
                  src="images/img_socmed.svg"
                  alt="socmed"
                />
                <Text
                  className="leading-[24.00px] ml-6 md:ml-[0] mt-10 text-base text-center text-white-A700"
                  size="txtLatoRegular16"
                >
                  <>
                    My personal contact
                    <br />
                    +12 345 678 90
                  </>
                </Text>
                <Text
                  className="leading-[24.00px] md:ml-[0] ml-[29px] mt-10 text-base text-center text-white-A700"
                  size="txtLatoRegular16"
                >
                  <>
                    Say hello, on Skype
                    <br />
                    jenadoe.skype
                  </>
                </Text>
              </div>
            </div>
            <div className="md:h-[553px] h-[631px] sm:h-[704px] relative w-[67%] md:w-full">
              <Img
                className="absolute bottom-[0] h-[505px] right-[0]"
                src="images/img_decorationdots_black_900.svg"
                alt="decorationdots_One"
              />
              <div className="absolute bg-gray-800 flex flex-col items-center justify-start left-[0] p-[43px] md:px-10 sm:px-5 rounded-[30px] shadow-bs1 top-[0] w-[91%]">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mb-[89px] mt-[13px] w-[97%] md:w-full">
                  <Text
                    className="sm:mt-0 mt-0.5 text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                    size="txtLatoBlack48"
                  >
                    <span className="text-white-A700 font-lato text-left font-black">
                      <>
                        Contact
                        <br />
                      </>
                    </span>
                    <span className="text-deep_purple-A400 font-lato text-left font-black">
                      Me.
                    </span>
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <LandingColumnTwo className="flex flex-col items-center justify-start w-full" />
                    <div className="flex flex-col gap-[31px] items-start justify-start mt-[54px] w-full">
                      <Text
                        className="text-[11px] text-deep_purple-100"
                        size="txtLatoRegular11"
                      >
                        What it your email? *
                      </Text>
                      <Line className="bg-deep_purple-A400 h-px w-full" />
                    </div>
                    <LandingColumnThree className="flex flex-col items-center justify-start mt-[46px] w-full" />
                    <Button className="cursor-pointer font-black leading-[normal] min-w-[306px] mt-[47px] text-center text-sm uppercase">
                      send message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
