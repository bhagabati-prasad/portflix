import VariableProximity from "@/components/VariableProximity"
import "./footer.scss"
import Link from "next/link"
import { Quote } from "lucide-react"

const Footer = () => {
  return (
    <footer>
      <div className="footer container mx-auto pt-10">
        <div className="container mx-auto flex flex-col">
          <div className="footer_brand pointer-events-none w-full select-none">
            <div className="mb-2 w-20 text-2xl">
              <VariableProximity label="THE" />
            </div>
            <VariableProximity
              label="PORTFLiX"
              customClassName="footer_brand_text"
            />
          </div>

          <div className="mb-8 grid grid-cols-12">
            <p className="col-span-4 text-4xl tracking-[0.4px]">
              <Quote />
              Build things that matter, even when no one is watching.
            </p>

            <div className="footer_nav_links col-span-8 my-4 flex items-end justify-end gap-4">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Blogs</Link>
              <Link href={"/"}>Works</Link>
              <Link href={"/"}>Contact</Link>
            </div>
          </div>
          <p className="mt-10 mb-5 text-center text-xl tracking-[0.5px]">
            Thank you for coming this far!
          </p>
        </div>
      </div>
      <div className="mx-auto bg-black">
        <p className="m-0 flex items-center justify-center py-4">
          Copyright &copy; 2024 &nbsp; | &nbsp; Crafted with &nbsp;&nbsp;
          <span className="heart_icon" style={{ width: "22px" }}></span> &nbsp;
          by Bhagabati Prasad
        </p>
      </div>
    </footer>
  )
}

export default Footer
