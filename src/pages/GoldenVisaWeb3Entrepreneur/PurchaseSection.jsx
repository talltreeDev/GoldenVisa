import { Button } from "../../components/ButtonGenz";
import { Img } from "../../components/ImgMint";
import { Heading } from "../../components/HeadingMint";
import { Text } from "../../components/Text";
import { Input } from "../../components/InputGenz";
import React from "react";

export default function PurchaseSection() {
  return (
    <>
      {/* purchase section */}
      <div className="mt-[180px] flex justify-center self-stretch">
        <div className="container-xs flex items-start justify-center max-[1440px]:px-5 max-[1050px]:flex-col max-[1050px]:px-5">
          <div className="flex w-full flex-col">
            <div className="flex flex-col items-start gap-[18px]">
              <Button
                size="xs"
                className="flex rounded-[18px] border border-solid border-dark-0 p-1.5"
              >
                Purchase token
              </Button>
              <Text
                size="visa_desktop_headers_h2"
                as="p"
                className="text-3xl md:text-5xl"
              >
                Purchase Tokens
              </Text>
            </div>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-1 w-[80%] leading-[140%] !text-dark-2 max-[1440px]:w-full max-[1050px]:w-full"
            >
              Our token&#39;s minting journey spans 500 days, ensuring a steady
              and controlled release into the market. This gradual approach
              helps maintain price stability and prevents market manipulation.
            </Text>
            <Text
              size="visa_desktop_body_text_20"
              as="p"
              className="mt-5 w-[80%] leading-[140%] max-[1440px]:w-full max-[1050px]:w-full"
            >
              <span>Act fast! Only&nbsp;</span>
              <span className="font-medium">
                120.75K OPN tokens remain for today&#39;s mint. Don&#39;t miss
                out on this opportunity. Daily cap enforced for fairness.
              </span>
            </Text>
          </div>
          <div className="relative h-[756px] w-full self-center rounded-[20px] bg-light_base">
              <Img
                src="images/img_icon_star_glossy_glass_style.png"
                alt="Star Image"
                className="absolute right-0 top-0 m-auto h-[654px] w-[74%] object-contain opacity-50"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col gap-[60px] px-12 max-[1050px]:px-5 max-[550px]:gap-[30px] max-[550px]:px-4 max-[550px]:items-start">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-start gap-2">
                    <Heading as="h2">Your name</Heading>
                    <Input
                      shape="round"
                      name="Name Input"
                      placeholder={`John Doe`}
                      className="self-stretch max-[1050px]:text-[20px]"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Heading as="h3">You email</Heading>
                    <Input
                      shape="round"
                      type="email"
                      name="Email Input"
                      placeholder={`johndoe@gmail.com`}
                      className="self-stretch max-[1050px]:text-[20px]"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-start gap-2">
                      <Heading as="h4">OPN amount to stake</Heading>
                      <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 shadow-sm text-dark-0 h-[50px] pl-[26px] pr-2 text-[24px]">
                        <input type="text" name="Token Input" placeholder="OPN 1250" />
                        <div className="flex gap-4 border border-solid bg-white pr-[40px] pl-[20px] py-[5px] rounded-[30px] text-[20px]">
                          <img className="h-[25px] w-[25px]" src="images/img_ellipse_362_26x32.png" alt="Ellipse 362" loading="lazy" />
                          OPN
                        </div>
                      </label>
                    </div>                    
                    <div className="flex flex-col gap-4">
                      <Button
                        variant="gradient"
                        shape="round"
                        color="blue_700_blue_800_02"
                        rightIcon={
                          <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0 absolute right-[10px]">
                            <Img
                              src="images/img_arrowleft_blue_800_01.svg"
                              alt="Arrow Left"
                              className="h-[18px] w-[18px]"
                            />
                          </div>
                        }
                        className="gap-[34px] self-stretch font-medium capitalize relative"
                      >
                        Stake tokens
                      </Button>
                      <Button
                        shape="round"
                        color="undefined_undefined"
                        rightIcon={
                          <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-accent-dark_blue absolute right-[10px]">
                            <Img
                              src="images/img_arrowleft_white_0.svg"
                              alt="Arrow Left"
                              className="h-[18px] w-[18px]"
                            />
                          </div>
                        }
                        className="gap-[34px] self-stretch font-medium capitalize border border-solid border-slate-950 relative"
                      >
                        Buy Boost
                      </Button>
                    </div>
                    <div className="flex flex-col items-start gap-2 mt-10">
                      <Heading as="h5">Current usd Value</Heading>
                      <label class="self-stretch max-[550px]:text-[18px] flex items-center justify-center gap-4 cursor-text border-blue-900_1e border border-solid shadow-sm  rounded-[36px] bg-white-3 shadow-sm text-dark-0 h-[50px] pl-[26px] pr-2 text-[24px]">
                        <input type="text" name="Payment Input" placeholder="$ 100" />
                        <div className="flex gap-4 border border-solid bg-white pr-[40px] pl-[20px] py-[5px] rounded-[30px] text-[20px]">
                          <img className="h-[25px] w-[25px]" src="images/img_ellipse_362.png" alt="Ellipse 362" loading="lazy" />
                          USD
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
