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
          <div className="hero_main flex flex-col items-start justify-between">
            <div className="hero_primary_row">
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
            <div className="hero_secondary_row grid grid-cols-3 gap-4">
              <div className="link_box col-span-1 flex flex-col">
                <span className="hero_label">LinkedIn</span>
                <span className="hero_value">link here...</span>
              </div>
              <div className="link_box col-span-1 flex flex-col">
                <span className="hero_label">E-mail</span>
                <span className="hero_value">link here...</span>
              </div>
              <div className="link_box col-span-1 flex flex-col">
                <span className="hero_label">Github</span>
                <span className="hero_value">link here...</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="details_container container mx-auto flex items-center">
        <div className="grid w-full grid-cols-4">
          <div className="col-span-2">ancjan</div>
          <div className="col-span-2">
            <PixelTransition
              firstContent={
                <div className="details_pixel_primary_elem">
                  <img src="images/resume.jpg" alt="Resume" />
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
      </section>
    </>
  )
}
