import DarkVeil from "@/components/DarkVeil"

export default function Page() {
  return (
    <>
      <div className="relative h-screen w-full">
        <DarkVeil />
        <h1 className="absolute top-[50%] left-5">Hello World!</h1>
      </div>
    </>
  )
}
