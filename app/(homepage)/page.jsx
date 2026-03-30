import DarkVeil from "@/components/DarkVeil"
import SplitTextWrapper from "@/components/SplitText"
import "./homepge.scss"
import GradientText from "@/components/GradientText"
import PixelTransition from "@/components/PixelTransition"

export default function Page() {
  return (
    <>
      <section className="hero_section relative pb-(--section-padding)">
        <div className="canvas_background">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={1.5}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>
        <div className="hero_container container mx-auto flex items-center">
          <div className="hero_main flex w-full flex-col items-start justify-between">
            <div className="hero_primary_row w-full">
              <h1>
                <SplitTextWrapper text="Hello, I'm Prasad B." />
              </h1>
              <h2 className="flex gap-4">
                <GradientText
                  colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="custom-class"
                >
                  Software
                </GradientText>
                Developer
              </h2>
            </div>
            <div className="hero_secondary_row flex w-full flex-wrap gap-5">
              <div className="link_box flex w-1/6 flex-col">
                <span className="hero_label">LinkedIn</span>
                <span className="hero_value">link here...</span>
              </div>
              <div className="link_box flex w-1/6 flex-col">
                <span className="hero_label">E-mail</span>
                <span className="hero_value">link here...</span>
              </div>
              <div className="link_box flex w-1/6 flex-col">
                <span className="hero_label">Github</span>
                <span className="hero_value">link here...</span>
              </div>
              <div className="link_box flex w-1/6 flex-col">
                <span className="hero_label">Instagram</span>
                <span className="hero_value">link here...</span>
              </div>
              <div className="link_box flex w-1/6 flex-col">
                <span className="hero_label">Phone Number</span>
                <span className="hero_value">link here...</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="details_container container mx-auto pb-(--section-padding)">
        <div className="grid w-full grid-cols-3 gap-5">
          <div className="col-span-1">
            <img src="images/IAM.png" alt="" />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <h2 className="section_heading">About me</h2>
                <h3 className="details_main_desc mb-8 w-3/4">
                  Passionate & Lead Product designer
                </h3>
                <p className="details_summary w-3/4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  quos consectetur ipsa vero, est inventore provident dolore
                  natus fugit optio maiores, nemo eaque labore non assumenda
                  laboriosam praesentium quae totam.
                </p>
              </div>
              <div className="col-span-1">
                <div className="col-span-3">
                  <PixelTransition
                    firstContent={
                      <div className="details_pixel_primary_elem">
                        <img src="images/resume.png" alt="Resume" />
                      </div>
                    }
                    secondContent={
                      <div
                        className="pixel_trans_sec"
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "grid",
                          placeItems: "center",
                          backgroundColor: "#29076f",
                        }}
                      >
                        <p
                          style={{
                            fontWeight: 900,
                            fontSize: "3rem",
                            color: "#ffffff",
                          }}
                        >
                          Download Resume
                        </p>
                      </div>
                    }
                    gridSize={8}
                    pixelColor="#ffffff"
                    once={false}
                    animationStepDuration={0.4}
                    className="custom-pixel-card w-full"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 pt-(--section-padding)">
              <div className="col-span-6">Skills</div>
              <div className="honeycomb_box col-span-1">
                <span className="honeycomb_box_content">HTML</span>
              </div>
              <div className="honeycomb_box col-span-1">
                <span className="honeycomb_box_content">HTML</span>
              </div>
              <div className="honeycomb_box col-span-1">
                <span className="honeycomb_box_content">HTML</span>
              </div>
              <div className="honeycomb_box col-span-1">
                <span className="honeycomb_box_content">HTML</span>
              </div>
              <div className="honeycomb_box col-span-1">
                <span className="honeycomb_box_content">HTML</span>
              </div>
              <div className="honeycomb_box col-span-1">
                <span className="honeycomb_box_content">HTML</span>
              </div>
              <div className="honeycomb_box col-span-1">
                <span className="honeycomb_box_content">HTML</span>
              </div>
              <div className="honeycomb_box col-span-1">
                <span className="honeycomb_box_content">HTML</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
