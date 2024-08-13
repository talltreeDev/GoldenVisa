import { Button } from "../../components/ButtonGenz";
import { Img } from "../../components/ImgMint";
import { Heading } from "../../components/HeadingMint";
import { Text } from "../../components/Text";
import React from "react";

export default function HowItWorksSection() {
  return (
    <>
      {/* how it works section */}
      <div className="mt-[148px] flex justify-center self-stretch">
        <div className="container-xs flex justify-center gap-4 max-[1440px]:px-5 max-[1050px]:flex-col max-[1050px]:px-5">
          <Img
            src="images/img_img copy.png"
            alt="Main Image"
            className="h-[692px] w-[50%] rounded-[20px] object-contain max-[1050px]:w-full"
          />
          <div className="flex flex-1 flex-col gap-10 rounded-[20px] border border-solid border-gray-300 bg-white-0 p-7 shadow-sm max-[1050px]:self-stretch max-[550px]:p-4">
            <div className="mt-5 flex flex-col items-start gap-[18px]">
              <Button
                size="xs"
                className="flex rounded-[18px] border border-solid border-dark-0 p-1.5"
              >
                Step-by-step process
              </Button>
              <Text
                size="visa_desktop_headers_h3"
                as="p"
                className="!text-dark-0 text-3xl md:text-5xl"
              >
                How It Works
              </Text>
            </div>
            <div>
              <div className="flex items-center gap-5 max-[1050px]:flex-row max-[1050px]:justify-between max-[550px]:flex-row max-[550px]:justify-between">
                <div className="relative h-[450px] w-[8%] content-center max-[1440px]:h-auto max-[1050px]:h-auto max-[1050px]:w-[30%] max-[550px]:w-[30%] max-[550px]:py-8">
                  <div className="mx-auto flex flex-1 items-start justify-center px-[26px] max-[550px]:px-4 max-[550px]:justify-start">
                    <div className="h-[300px] w-[2px] self-center bg-gray-300 max-[550px]:ml-3" />
                    <div className="relative ml-[-2px] h-[218px] w-[2px]" style={{backgroundImage: "linear-gradient(180deg, #08122A 0%, #ffffff 100%)"}}/>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center max-[550px]:items-start">
                    <button class="indigo_100_dark_0_border w-[56px] !rounded-[28px] border-[1.5px] border-solid flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[56px] px-3.5 " style={{background: "white"}}>
                      <img src="images/img_coins_stack_streamline_core.svg" alt="testImg" loading="lazy" />
                    </button>
                    <button class="mt-[155px] w-[56px] !rounded-[28px] border border-solid flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[56px] px-3.5" style={{background: "#f4f4f4"}}>
                      <img src="images/img_frame_84.svg" alt="testImg" loading="lazy" />
                    </button>
                    <button class="mt-[60px] w-[56px] !rounded-[28px] border border-solid flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[56px] px-3.5" style={{background: "#f4f4f4"}}>
                      <img src="images/img_calendar_star.svg" alt="testImg" loading="lazy" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start gap-[70px] max-[1050px]:self-stretch max-[550px]:gap-[57px]">
                  <div className="flex flex-col items-start gap-8 self-stretch">
                    <div className="flex flex-col items-start gap-0.5 self-stretch">
                      <Heading
                        size="visa_desktop_headers_h4"
                        as="h2"
                        className="!text-dark-0 max-[1050px]:text-[26px] max-[550px]:text-[24px]"
                      >
                        1. Mint and Stake OPN Tokens
                      </Heading>
                      <Text
                        size="visa_desktop_body_text_20"
                        as="p"
                        className="w-full leading-[140%] !text-dark-1"
                      >
                        Start by minting and staking OPO tokens.
                      </Text>
                    </div>
                    <Button
                      shape="round"
                      color="undefined_undefined"
                      rightIcon={
                        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-accent-dark_blue">
                          <Img
                            src="images/img_arrowleft_white_0.svg"
                            alt="Arrow Left"
                            className="h-[18px] w-[18px]"
                          />
                        </div>
                      }
                      className="flex rounded-[18px] border border-solid border-dark-0 p-1.5 gap-5"
                    >
                      View details
                    </Button>
                  </div>
                  <Heading
                    size="visa_desktop_headers_h4"
                    as="h3"
                    className="max-[1050px]:text-[26px] max-[550px]:text-[24px] max-[550px]:-mt-6"
                  >
                    2. Upload documents
                  </Heading>
                  <Heading
                    size="visa_desktop_headers_h4"
                    as="h4"
                    className="max-[1050px]:text-[26px] max-[550px]:text-[24px] max-[550px]:mt-6"
                  >
                    3. Visa Process
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
