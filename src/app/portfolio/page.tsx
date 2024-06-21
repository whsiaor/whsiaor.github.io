import Container from "../_components/container";
import { Intro } from "../_components/intro";
import Projects from "../_components/projects";

export default function Portfolio() {
  return (
    <main>
      <Container>
        <Intro
          title="Programming."
          subtitle="- A Collection of My projects"
        />
        <div className="px-2 md:px-20">
          <h2 className=" text-right border-b-2 w-100 mb-7 text-3xl md:text-5xl font-thin tracking-tighter leading-tight ">
            All projects
          </h2>
        </div>
       <Projects />
      </Container>
    </main>
  );
}
