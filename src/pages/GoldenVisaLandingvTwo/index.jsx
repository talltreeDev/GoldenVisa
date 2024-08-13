import { Helmet } from "react-helmet";
import ExclusivePerksSection from "./ExclusivePerksSection";
import GoldenVisaLandingSection from "./GoldenVisaLandingSection";
import GoldenVisaLandingSection1 from "./GoldenVisaLandingSection1";
import { Button } from "../../components/Button";
import { Img } from "../../components/Img";
import { Text } from "../../components/Text";
import FooterVisa from "../../components/FooterVisa";
import HeaderVisa from "../../components/HeaderVisa";
import logoWhite from "../../assets/logo-white.png";
import Footer from "../../components/Footer/FooterEl";
import { Link } from "react-router-dom";
// import { Heading } from "../../HeadingMint/index";
import { Heading } from "../../components/HeadingMint";

export default function GoldenVisaLandingvTwoPage() {
  return (
    <>
      <Helmet>
        <title>UAE Golden Visa Program - Unlock Your Future</title>
        <meta
          name="description"
          content="Join the GenZ Talent Program for a chance to win a UAE Golden Visa. Secure your future with career growth, global mobility, and entrepreneurial opportunities. Enter our monthly draw now!"
        />
      </Helmet>
      <div className="w-full bg-white-0">
        <div className="w-full">
          <div className="flex min-h-[860px] justify-center bg-[url(/public/images/img_hero.png)] bg-cover bg-no-repeat w-full py-3">
            <div className="max-w-screen-xl w-full px-4 mx-auto relative">
              <div className="flex w-full flex-col justify-between items-center gap-32">
                <HeaderVisa />
                <div className="flex flex-col items-center gap-5 w-full">
                  <div className="flex flex-col items-center gap-5 self-stretch w-[32vw] text-center mx-auto">
                    <Button
                      size="xs"
                      className="min-w-64 rounded-2xl uppercase"
                    >
                      Join the GenZ Talent Program
                    </Button>
                    <h1 className="text-shadow-ts !text-white-0 text-3xl md:text-6xl w-full text-center">
                      Unlock Your Future with A UAE Golden Visa!
                    </h1>
                    <h5 className="text-white-0">
                      Join the IOPn GenZ Talent Program and turn your dreams
                      into reality. Secure your spot in the monthly draw for a
                      life-changing UAE Golden Visa!
                    </h5>
                  </div>
                  <Link to="/GenzTalentProgram">
                    <Button
                      variant="fill"
                      shape="round"
                      rightIcon={
                        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-dark-0">
                          <Img
                            src="images/img_arrowleft_white_0.svg"
                            alt="Arrow Left"
                            className="h-[18px] w-[18px]"
                          />
                        </div>
                      }
                      className="min-w-[258px] gap-4 capitalize"
                    >
                      Enter the Draw now
                    </Button>
                  </Link>
                </div>
                <img
                  src={logoWhite}
                  className="logo-gv-hero absolute w-[50px] right-0 bottom-[15px]"
                />
              </div>
            </div>
          </div>
          <div className="relative bg-gradient4 w-full h-[620px]">
            <div className=" max-w-screen-xl mx-auto px-4">
              <div className="z-10 flex items-start relative md:flex-col">
                <Img
                  src="images/img_1_2.svg"
                  alt="Featured Image"
                  className="h-[600px] w-full object-contain absolute z-0"
                />
                <Img
                  src="images/img_1_1.svg"
                  alt="Image"
                  className="h-[600px] w-full absolute z-10"
                />
                <div className="relative flex flex-col items-center gap-5 py-10 md:py-20 w-[60vw] text-center mx-auto">
                  <Button size="xs" className="uppercase">
                    About the GenZ Talent Program
                  </Button>
                  <h2 className="text-shadow-ts !text-white-0 !text-center md:text-left text-4xl md:text-6xl">
                    <span className="text-white-0">What is the</span>
                    <br />
                    <span className="text-blue-400">
                      IOPn GenZ Talent Program
                    </span>{" "}
                    ?
                  </h2>
                  <p className="w-full !text-center md:text-left !text-white-0 text-lg md:text-xl">
                    Imagine a future where the only limit is your ambition. The
                    GenZ Talent Program, in partnership with the visionary RAK
                    Government, offers you the chance to obtain a coveted UAE
                    Golden Visa. This program is designed to break down barriers
                    and democratize opportunities, making it easier than ever
                    for exceptional talents from around the world to thrive in
                    the UAE.
                  </p>
                  {/* <p className="w-full !text-center md:text-left !text-white-0 text-lg md:text-xl">
                    Traditionally, securing a UAE Golden Visa requires a
                    significant investment, but the GenZ Talent Program is
                    changing the game. With just 10,000 OPN Tokens, currently
                    valued at $500, you can participate in our innovative Life
                    Changing Draw. This is your opportunity to join a community
                    of dreamers and achievers, and transform your life.
                  </p> */}
                </div>
              </div>
            </div>
            {/* {/* golden visa landing section } */}
          </div>
          <GoldenVisaLandingSection />
          {/* golden visa landing section */}
          <GoldenVisaLandingSection1 />
          <div className="mt-[122px] flex flex-col items-center">
            {/* <div className="container-xs lg:px-5 md:px-5">
              <div className="relative h-[1844px] content-center lg:h-auto md:h-auto">
                <div className="mx-auto flex flex-1 flex-col items-end px-[26px] sm:px-4">
                  <div className="relative z-[4] flex items-center justify-end self-stretch md:flex-col">
                    <div className="flex flex-1 items-center justify-end md:flex-col md:self-stretch">
                      <div className="relative z-[5] flex w-[30%] flex-col items-end gap-1.5 md:w-full">
                        <Heading as="h2" className="!text-accent-blue">
                          [ 01 ]
                        </Heading>
                        <Heading size="visa_headers_h4" as="h3" className="md:text-[26px] sm:text-[24px]">
                          Mint OPN Tokens
                        </Heading>
                        <Text
                          size="visa_body_text_18"
                          as="p"
                          className="w-[90%] text-right leading-[140%] !text-dark-2 lg:w-full md:w-full"
                        >
                          Kickstart your journey by purchasing 10,000 OPN tokens from our program portal.
                        </Text>
                      </div>
                      <div className="relative ml-[-100px] h-[944px] flex-1 bg-[url(/public/images/img_group_292.svg)] bg-cover bg-no-repeat p-14 lg:h-auto md:ml-0 md:h-auto md:self-stretch md:p-5 sm:p-4">
                        <div className="mb-[592px] flex flex-col items-start gap-6">
                          <div className="ml-[260px] flex rounded-[18px] border border-solid border-dark-0 p-1.5 md:ml-0">
                            <Heading as="h4">How Does It Work?</Heading>
                          </div>
                          <Text size="visa_headers_h2" as="p" className="lg:text-[48px]">
                            <>
                              Learn the steps to
                              <br />
                              kickstart your journey
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="relative ml-[-194px] flex w-[24%] flex-col items-start gap-1.5 md:ml-0 md:w-full">
                      <Heading as="h5" className="!text-accent-blue">
                        [ 02 ]
                      </Heading>
                      <Heading size="visa_headers_h4" as="h6" className="md:text-[26px] sm:text-[24px]">
                        Stake Your Tokens
                      </Heading>
                      <Text
                        size="visa_body_text_18"
                        as="p"
                        className="w-[90%] leading-[140%] !text-dark-2 lg:w-full md:w-full"
                      >
                        Stake your OPN tokens on our platform to secure eligibility for 12 monthly draws.
                      </Text>
                    </div>
                  </div>
                  <div className="relative mr-[92px] mt-[-196px] flex h-[1096px] w-[80%] items-end justify-center bg-[url(/public/images/img_group_2.svg)] bg-cover bg-no-repeat px-14 py-[216px] lg:h-auto lg:w-full lg:py-8 md:mr-0 md:h-auto md:w-full md:p-5 sm:p-4">
                    <div className="mt-[368px] flex w-[92%] flex-col items-start lg:w-full md:w-full">
                      <Heading as="p" className="ml-[354px] !text-grey md:ml-0">
                        [ 05 ]
                      </Heading>
                      <Text size="visa_headers_h2" as="p" className="mt-6 lg:text-[48px]">
                        Monthly Visa Allocation
                      </Text>
                      <Text
                        size="visa_body_text_20"
                        as="p"
                        className="mt-2 self-stretch text-center leading-[140%] !text-dark-2"
                      >
                        <>
                          Each draw allocates a specific number of Golden Visas
                          <br />
                          and benefits to participants.
                        </>
                      </Text>
                      <Button
                        color="dark_0"
                        variant="fill"
                        shape="round"
                        rightIcon={
                          <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[50%] bg-white-0">
                            <Img src="images/img_arrowleft.svg" alt="Arrow Left" className="h-[18px] w-[18px]" />
                          </div>
                        }
                        className="ml-[238px] mt-[30px] min-w-[270px] gap-[26px] capitalize md:ml-0"
                      >
                        Enter the Draw now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 z-[6] m-auto h-[712px] flex-1 bg-[url(/public/images/img_group_4.png)] bg-cover bg-no-repeat px-[26px] py-[98px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:p-4">
                  <div className="mb-[134px] flex flex-col gap-[120px] lg:gap-[90px] md:gap-[90px] sm:gap-[60px]">
                    <div className="mx-[90px] flex items-end justify-center gap-2.5 md:mx-0 md:flex-col">
                      <div className="h-[68px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[68px]" />
                      <div className="h-[52px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[52px]" />
                      <div className="h-[52px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[52px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[38px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[38px]" />
                      <div className="h-[62px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[62px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[62px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[62px]" />
                      <div className="h-[114px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[114px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[86px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[86px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[34px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[34px]" />
                      <div className="h-[44px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[44px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[40px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[40px]" />
                      <div className="h-[66px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[66px]" />
                      <div className="h-[50px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[50px]" />
                      <div className="h-[86px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[86px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[34px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[34px]" />
                      <div className="h-[44px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[44px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[114px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[114px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[52px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[52px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[38px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[38px]" />
                      <div className="h-[62px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[62px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[62px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[62px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[34px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[34px]" />
                      <div className="h-[44px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[44px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[40px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[40px]" />
                      <div className="h-[66px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[66px]" />
                      <div className="h-[50px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[50px]" />
                      <div className="h-[86px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[86px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[34px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[34px]" />
                      <div className="h-[44px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[44px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[114px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[114px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[52px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[52px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[38px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[38px]" />
                      <div className="h-[62px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[62px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[62px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[62px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[34px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[34px]" />
                      <div className="h-[44px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[44px]" />
                      <div className="h-[86px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[86px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[114px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[114px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[124px] w-[4px] self-center rounded-sm bg-dark-0 md:h-[4px] md:w-[124px]" />
                      <div className="h-[94px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[94px]" />
                      <div className="h-[82px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[82px]" />
                      <div className="h-[62px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[62px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                      <div className="h-[64px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[64px]" />
                      <div className="h-[52px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[52px]" />
                      <div className="h-[56px] w-[4px] rounded-sm bg-dark-0 md:h-[4px] md:w-[56px]" />
                    </div>
                    <div className="flex justify-between gap-5 md:flex-col">
                      <div className="flex w-[28%] flex-col items-end gap-1.5 md:w-full">
                        <Heading as="p" className="!text-grey">
                          [ 04 ]
                        </Heading>
                        <Heading size="visa_headers_h4" as="p" className="md:text-[26px] sm:text-[24px]">
                          Boost Your Chances
                        </Heading>
                        <Text
                          size="visa_body_text_18"
                          as="p"
                          className="w-[90%] text-right leading-[140%] !text-dark-2 lg:w-full md:w-full"
                        >
                          Increase your odds with exclusive boosters and referral rewards system.
                        </Text>
                      </div>
                      <div className="flex w-[28%] flex-col items-start gap-1.5 md:w-full">
                        <Heading as="p" className="!text-grey">
                          [ 03 ]
                        </Heading>
                        <Heading size="visa_headers_h4" as="p" className="md:text-[26px] sm:text-[24px]">
                          Join the Draw
                        </Heading>
                        <Text
                          size="visa_body_text_18"
                          as="p"
                          className="w-[90%] leading-[140%] !text-dark-2 lg:w-full md:w-full"
                        >
                          Every month, enter a decentralized draw for a chance to win a UAE Golden Visa.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_img.png"
                  alt="Image One"
                  className="absolute left-0 right-0 top-[21%] z-[7] m-auto h-[674px] w-[32%] rounded-[24px] object-contain"
                />
              </div>
            </div> */}

            {/* exclusive perks section */}
            <ExclusivePerksSection />
          </div>

          {/* testimonial section */}
          {/* <TestimonialSection /> */}
          <div className="mt-20 flex flex-col items-center">
            <div className="max-w-screen-2xl mx-auto w-full px-4">
              <div className="flex gap-4 flex-col md:flex-row mb-5">
                <Img
                  src="images/img_rectangle_11.png"
                  alt="Promo Image"
                  className="h-[556px] rounded-[20px] w-full md:w-1/2"
                />
                <div className="flex flex-col items-start justify-center gap-20 rounded-[20px] bg-gradient3 px-4 py-4">
                  <div className="flex flex-col gap-4 self-stretch">
                    <div className="flex flex-col items-start gap-2">
                      <Button
                        size="xs"
                        className="min-w-[134px] rounded-[18px] uppercase"
                      >
                        Get started
                      </Button>
                      <Text
                        size="visa_headers_h2"
                        as="p"
                        className="w-full leading-[105%] !text-white-0 lg:text-[48px]  text-2xl lg:tex-1xl "
                      >
                        <>
                          Ready To Invest In
                          <br />
                          Your Future?
                        </>
                      </Text>
                    </div>
                    <Text
                      size="iopn_desktop_body_text_20"
                      as="p"
                      className="leading-[140%] !text-white-1"
                    >
                      Don’t wait! Join the GenZ Talent Program today and take
                      the first step towards a brighter future. Mint your OPN
                      Tokens now and enter the monthly draw for your chance to
                      win a UAE Golden Visa.
                    </Text>
                  </div>
                  <Link to="/OPNTokenMint">
                    <Button
                      variant="fill"
                      shape="round"
                      rightIcon={
                        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-dark-0 absolute right-[5px]">
                          <Img
                            src="images/img_arrowleft_white_0.svg"
                            alt="Arrow Left"
                            className="h-[18px] w-[18px]"
                          />
                        </div>
                      }
                      className="w-full md:w-auto min-w-[200px] md:min-w-[334px] gap-4 capitalize text-xs sm:text-sm md:text-base lg:text-lg relative"
                    >
                      Mint Your OPN Tokens Now
                    </Button>
                  </Link>
                </div>
              </div>
              {/* <FooterVisa /> */}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
