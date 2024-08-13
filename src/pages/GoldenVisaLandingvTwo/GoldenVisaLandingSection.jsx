import { Img } from "../../components/Img";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export default function GoldenVisaLandingSection() {
  return (
    <>
      {/* golden visa landing section */}
      <div className="relative flex items-start justify-center bg-[url(/public/images/img_group_288.png)] bg-cover bg-no-repeat py-20 ">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex w-full flex-col items-center gap-6">
            <h1 className="text-shadow-ts text-black-900 text-3xl md:text-4xl font-semibold text-center">
              Traditionally, securing a UAE Golden Visa
              <br />
              requires a significant investment, but the GenZ
              <br />
              Talent Program is changing the game
            </h1>
            <p className="self-stretch text-center text-lg font-medium !text-black-900 text-opacity-20">
              With just 10,000 OPN Tokens, currently valued at $500, you can
              participate in our Innovative Life Changing Draw.
              <br className="hidden md:block" />
              This is your opportunity to join a community of dreamers and
              achievers, and transform your life.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link to="/GenzTalentProgram">
                <Button
                  variant="fill"
                  shape="round"
                  rightIcon={
                    <div className="flex h-9 w-9 items-center justify-center rounded-[50%] bg-dark-0">
                      <Img
                        src="images/img_arrowleft_white_0.svg"
                        alt="Arrow Left"
                        className="w-5 h-5"
                      />
                    </div>
                  }
                  className="gap-4 capitalize"
                >
                  Enter the Draw
                </Button>
              </Link>
              <Button
                shape="round"
                rightIcon={
                  <div className="flex w-9 h-9 items-center justify-center rounded-[50%] bg-white-0">
                    <Img
                      src="images/img_arrowleft.svg"
                      alt="Arrow Left"
                      className="h-5 w-5"
                    />
                  </div>
                }
                className="gap-4 capitalize"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
