import ImgCards from "@/app/_components/img-card";
import Container from "@/app/_components/container";
import { Intro } from "../_components/intro";

export default function GalleryPage() {
  return (
    <main>
      {/* <section className="flex-col md:flex-row flex items-baseline md:justify-between mt-10 mb-10">
      <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 italic">
        Graphics.
      </h1>
      <h4 className=" text-lg mt-3 px-3 md:pl-8 ">
        - A Collection of My Graphic Design Work{" "}
      </h4>
      </section> */}
      <Container>
        <Intro
          title="Graphics."
          subtitle="- A Collection of My Graphic Design Work"
        />
        <div className="px-2 md:px-20">
          <h2 className=" text-right border-b-2 w-100 mb-7 text-3xl md:text-5xl font-thin tracking-tighter leading-tight ">
            All Showcase
          </h2>
        </div>
        <ImgCards />
      </Container>
    </main>
  );
}
