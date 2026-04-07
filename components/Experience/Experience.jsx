import "./experience.scss"
import EmblaCarousel from "../ui/Carousel/EmblaCarousel"

const Experience = () => {
  const OPTIONS = {}
  const SLIDE_COUNT = 4
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const experience = [
    {
      id: 1,
      from: 2022,
      to: 2024,
      companyName: "Rumango",
      city: "Bangalore",
      role: "Senior Software Engineer",
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nihil.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nihil.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nihil.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nihil.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nihil.",
      ],
    },
  ]

  return (
    <section className="experience_section container mx-auto pb-(--section-padding)">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <h2 className="section_heading mt-2">
            Work <br /> Experience
          </h2>
        </div>
        <div className="col-span-10">
          <h2 className="section_main_desc mb-8 w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            amet.
          </h2>
        </div>
      </div>

      <div className="experience_section_main mt-8">
        <EmblaCarousel slides={experience} options={OPTIONS} />
      </div>
    </section>
  )
}

export default Experience
