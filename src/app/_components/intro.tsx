import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-baseline md:justify-between mt-10 mb-10">
      <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 italic">
        Coding.
      </h1>
      <h4 className=" text-lg mt-3 px-3 md:pl-8 ">
        - A blog of programming learning notes.{" "}
      </h4>
    </section>
  );
}
